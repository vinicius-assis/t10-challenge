export class InvalidParameterError extends Error {
  constructor(paramName: string) {
    super(`Invalid ${paramName} parameter`);
    this.name = "InvalidParameterError";
  }
}
