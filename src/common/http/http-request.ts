import { generateGuid } from "@common/utils/guid";
import { HttpRequestStatus } from "./http-enums";
import { IHttpRequestConfig } from "./http-request-config";

export interface IHttpRequest {
  id: string;
  config: IHttpRequestConfig;
  status: HttpRequestStatus;
  retries: number;
}