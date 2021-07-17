import { HttpVerb } from "./http-enums";

export interface IHttpRequestConfig {
  method: HttpVerb;
  baseURL: string;
  url: string;
  headers: object;
  data: any;
  timeout: number;
}

export class HttpRequestConfig implements IHttpRequestConfig { 
  public method: HttpVerb;
  public baseURL: string;
  public url: string;
  public headers: object;
  public data: any;
  public timeout: number;

  constructor(method: HttpVerb, baseURL: string, url: string, headers: object, data: any, timeout: number = 30000) {
    this.method = method;
    this.baseURL = baseURL;
    this.url = url;
    this.headers = headers;
    this.data = data;
    this.timeout = timeout;
  }
}

export default HttpRequestConfig;