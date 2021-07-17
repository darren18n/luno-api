import { ErrorCodes } from "@common/http/http-enums";
import { IHttpRequest } from "@common/http";
import { IHttpResponse } from "@common/http";
import CustomError from './custom-error';

export interface IHttpError {
  message: string;
  request: IHttpRequest;
  code?: ErrorCodes;
  response?: IHttpResponse;
}

export class HttpError extends CustomError implements IHttpError {
  public code?: ErrorCodes;
  public request: IHttpRequest;
  public response: IHttpResponse;
  public statusCode: string;

  constructor(message: string, request: IHttpRequest, response: IHttpResponse, code?: ErrorCodes) {
    super(message);
    this.code = code;
    this.request = request;
    this.response = response;
    this.statusCode = response.status;
  }
}

export default HttpError;