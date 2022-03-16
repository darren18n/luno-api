
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

export enum ErrorCodes {
  EconnAborted = "ECONNABORTED",
  Etimeout = "ETIMEDOUT",
  Enetdown = "ENETDOWN"
};

export enum ContentTypes {
  MultipartFormData = "multipart/form-data",
  ApplicationJson = "application/json"
};
