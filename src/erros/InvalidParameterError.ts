export class InvalidParameterError extends Error {
  constructor(paramName?: string) {
    super(paramName ? `Invalid ${paramName} parameter` : "Invalid parameter");
    this.name = "InvalidParameterError";
  }
}
