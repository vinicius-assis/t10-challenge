import { MachineSteps } from ".";
import { STEPS, TRANSITIONS } from "../utils/constants";

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

  test("should getMachineSteps return steps in correctly format", () => {
    const sut = new MachineSteps(STEPS, TRANSITIONS);
    const expectedMachineSteps = [
      { name: "A", transitions: { "0": "A", "1": "B" } },
      { name: "B", transitions: { "0": "C", "1": "A" } },
      { name: "C", transitions: { "0": "B", "1": "C" } },
    ];

    expect(sut.getMachineSteps()).toEqual(expectedMachineSteps);
  });
});
