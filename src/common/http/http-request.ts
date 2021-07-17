import { generateGuid } from "@common/utils/guid";
import { HttpRequestStatus } from "./http-enums";
import { IHttpRequestConfig } from "./http-request-config";

export interface IHttpRequest {
  id: String;
  config: IHttpRequestConfig;
  status: HttpRequestStatus;
  retries: number;
}

export class HttpRequest implements IHttpRequest {
  public id: String;
  public config: IHttpRequestConfig;
  public status: HttpRequestStatus;
  public retries: number;

  constructor(config: IHttpRequestConfig, retries: number = 0) {
    this.id = generateGuid();
    this.config = config;
    this.status = HttpRequestStatus.Pending;
    this.retries = retries;
  }
}

export default HttpRequest;