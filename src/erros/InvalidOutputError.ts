export class InvalidOutputError extends Error {
  constructor(element?: string) {
    super(
      element ? `Invalid output value: ${element}` : "Invalid output value"
    );
    this.name = "InvalidOutputError";
  }
}
