import { ErrorCodes } from "@common/http/http-enums";
import { IHttpRequest } from "@common/http";
import CustomError from './custom-error';
import { IHttpError } from './http-error';

export class TimeoutError extends CustomError implements IHttpError {
  public code: ErrorCodes;
  public request: IHttpRequest;

  constructor(message: string, request: IHttpRequest) {
    super(message);
    this.code = ErrorCodes.Etimeout;
    this.request = request;
  }
}

export default TimeoutError;