import { IHttpRequest, IHttpResponse } from "./";

export const HttpConfig = {
  DefaultBackoffFactor: 0.5,
  DefaultTimeout: 30000,
  MaxBackoffFactor: 120,
  MaxRetryAttempts: 5,
};

export abstract class HttpClientBase {
  public abstract sendRequest(request: IHttpRequest): Promise<IHttpResponse | any>
}