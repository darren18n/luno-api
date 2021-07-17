import { ErrorCodes } from "./http-enums";
import { CustomError, HttpError, IHttpError, NetworkError, TimeoutError } from "@common/errors";

export class HttpErrorHandler {
  public static mapError(error: IHttpError): HttpError | TimeoutError | NetworkError | CustomError {
    const { code, message, response, request } = error;
    if (response && response.status) {
      const { status } = response;
      const statusValue: number = Math.round(parseInt(status, 10) / 100);
      if (statusValue === 4 || statusValue === 5) {
        return new HttpError(message, request, response, code);
      }
    }
    if ((code && code === ErrorCodes.EconnAborted) || code === ErrorCodes.Etimeout) {
      return new TimeoutError(message, request);
    }
    if (code && code === ErrorCodes.Enetdown) {
      return new NetworkError(message, request);
    }

    return new CustomError("An unknown error occured.");
  }
}

export default HttpErrorHandler;
