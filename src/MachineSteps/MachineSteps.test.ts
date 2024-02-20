import { MachineSteps } from ".";

describe("MachineSteps", () => {
  test("should throw an error if no valid states is provided", () => {
    expect(() => new MachineSteps([])).toThrow("Invalid states parameter");
  });
});
