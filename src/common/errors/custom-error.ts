export class CustomError extends Error {
  public code?: string;
  public date: Date;

  constructor(message: string, code?: string) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.code = code;
    this.date = new Date();
  }
}

export default CustomError;