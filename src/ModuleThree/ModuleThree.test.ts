import { ModuleThree } from ".";

describe("ModuleThree", () => {
  test("should throw an error if no valid states is provided", () => {
    expect(() => new ModuleThree([])).toThrow("Invalid states parameter");
  });
});
