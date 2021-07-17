import { HttpVerb } from "./http-enums";
import { HttpRequest, HttpRequestConfig, IHttpRequestConfig, IHttpResponse } from "./";

export const HttpConfig = {
  DefaultBackoffFactor: 0.5,
  DefaultTimeout: 30000,
  MaxBackoffFactor: 120,
  MaxRetryAttempts: 5,
};

export abstract class HttpClientBase {
  public post(baseURL: string, url: string, config?: IHttpRequestConfig): Promise<IHttpResponse | any>;
  public post(baseURL: string, url: string, config: IHttpRequestConfig): Promise<IHttpResponse | any> {
    let nconfig = null;
    if (!config) {
      nconfig = new HttpRequestConfig(HttpVerb.Post, baseURL, url, {}, {}, HttpConfig.DefaultTimeout);
    }

    const request = new HttpRequest(config || nconfig, 0);
    return this.sendRequest(request);
  }

  public get(baseURL: string, url: string, config?: IHttpRequestConfig): Promise<IHttpResponse | any>;
  public get(baseURL: string, url: string, config: IHttpRequestConfig): Promise<IHttpResponse | any> {
    let nconfig = null;
    if (!config) {
      nconfig = new HttpRequestConfig(HttpVerb.Get, baseURL, url, {}, {}, HttpConfig.DefaultTimeout);
    }

    const request = new HttpRequest(config || nconfig, 0);
    return this.sendRequest(request);
  }

  public put(baseURL: string, url: string, config?: IHttpRequestConfig): Promise<IHttpResponse | any>;
  public put(baseURL: string, url: string, config: IHttpRequestConfig): Promise<IHttpResponse | any> {
    let nconfig = null;
    if (!config) {
      nconfig = new HttpRequestConfig(HttpVerb.Put, baseURL, url, {}, {}, HttpConfig.DefaultTimeout);
    }

    const request = new HttpRequest(config || nconfig, 0);
    return this.sendRequest(request);
  }

  public delete(baseURL: string, url: string, config?: IHttpRequestConfig): Promise<IHttpResponse | any>;
  public delete(baseURL: string, url: string, config: IHttpRequestConfig): Promise<IHttpResponse | any> {
    let nconfig = null;
    if (!config) {
      nconfig = new HttpRequestConfig(HttpVerb.Delete, baseURL, url, {}, {}, HttpConfig.DefaultTimeout);
    }

    const request = new HttpRequest(config || nconfig, 0);
    return this.sendRequest(request);
  }

  public abstract sendRequest(request: HttpRequest): Promise<IHttpResponse | any>
}