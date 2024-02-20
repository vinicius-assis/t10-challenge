import { MachineSteps } from ".";

const TRANSITIONS = {
  S0: { "0": "S0", "1": "S1" },
  S1: { "0": "S2", "1": "S0" },
  S2: { "0": "S1", "1": "S2" },
};

describe("MachineSteps", () => {
  test("should throw an error if no valid states is provided", () => {
    expect(() => new MachineSteps([], TRANSITIONS)).toThrow(
      "Invalid states parameter"
    );
  });

  test("should throw an error if no valid transitions is provided", () => {
    expect(() => new MachineSteps(["A", "B"], {})).toThrow(
      "Invalid transitions parameter"
    );
  });
});
