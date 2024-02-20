export class InvalidInputError extends Error {
  constructor(element: string) {
    super(`Invalid input element: ${element}`);
    this.name = "InvalidInputError";
  }
}
