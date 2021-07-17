import { IHttpRequest } from "./http-request";
import { IHttpRequestConfig } from "./http-request-config";

export interface IHttpResponse {
  data: object;
  status: string;
  statusText: string;
  headers: object;
  config: IHttpRequestConfig;
  request: IHttpRequest;
}
