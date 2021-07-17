
export enum HttpRequestStatus {
  Failed = "FAILED",
  Pending = "PENDING",
  Succeeded = "SUCCEEDED",
};

export enum HttpVerb {
  Post = "POST",
  Get = "GET",
  Put = "PUT",
  Patch = "PATCH",
  Delete = "DELETE",
  Head = "HEAD"
};

export enum HttpStatusCode {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
  ServiceUnavailable = 503
};

export enum ErrorCodes {
  EconnAborted = "ECONNABORTED",
  Etimeout = "ETIMEDOUT",
  Enetdown = "ENETDOWN"
};

export enum ContentTypes {
  MultipartFormData = "multipart/form-data",
  ApplicationJson = "application/json"
};
