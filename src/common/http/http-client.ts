import axios, { AxiosError, AxiosInstance } from "axios";
import { HttpVerb } from "./http-enums";
import { CustomError, HttpError, NetworkError, TimeoutError } from "@common/errors";
import { HttpRequest, IHttpResponse } from "./";
import { HttpClientBase, HttpConfig } from "./http-client-base";
import { HttpErrorHandler } from "./http-error-handler";

export class HttpClient extends HttpClientBase {
  private client: AxiosInstance;

  constructor(baseUrl: string) {
      super();
      this.client = axios.create({
        baseURL: baseUrl,
        timeout: HttpConfig.DefaultTimeout
      });
  }

  public async sendRequest(request: HttpRequest): Promise<any> {
    return this.client
      .request(request.config)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        const { } = error;
        const errorInstance = HttpErrorHandler.mapError(error);
        if (request.retries > 0) {
          return this.retry(errorInstance);
        }
        return Promise.reject(errorInstance);
      });
  }

  private getBackOffFactor(retries: number): number {
    const backoffFactor = HttpConfig.DefaultBackoffFactor * 2 ** (retries - 1);
    return backoffFactor < HttpConfig.MaxBackoffFactor ? backoffFactor * 1000 : HttpConfig.MaxBackoffFactor * 1000;
  }

  private async delayedRetry(request: HttpRequest, delay: number): Promise<IHttpResponse | AxiosError> {
    const pause = (duration: number) => new Promise(resolve => setTimeout(resolve, duration, null));
    return this.sendRequest(request)
      .catch(error => pause(delay).then(() => this.retry(error, delay)));
  }

  private retry(error: HttpError | TimeoutError | NetworkError | CustomError, delay: number = 500): Promise<IHttpResponse | AxiosError> {
    if ((error instanceof HttpError) || (error instanceof TimeoutError) || (error instanceof NetworkError)) {
      const { request } = error;
      request.retries = request.retries + 1;
      const isMethodIdempotent: boolean = request.config.method === (HttpVerb.Get || HttpVerb.Head || HttpVerb.Put || HttpVerb.Delete);
      if (isMethodIdempotent && request.retries <= HttpConfig.MaxRetryAttempts) {
        return this.delayedRetry(request, this.getBackOffFactor(request.retries));
      }
    }
    return Promise.reject(error);
  }
}

export default HttpClient;
