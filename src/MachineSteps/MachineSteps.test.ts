import { MachineSteps } from ".";
import { STATES, STATES2, TRANSITIONS, TRANSITIONS2 } from "../utils/constants";

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
    const sut = new MachineSteps(STATES, TRANSITIONS);
    const expectedMachineSteps = [
      { name: "A", transitions: { "0": "A", "1": "B" } },
      { name: "B", transitions: { "0": "C", "1": "A" } },
      { name: "C", transitions: { "0": "B", "1": "C" } },
    ];

    expect(sut.getMachineSteps()).toEqual(expectedMachineSteps);
  });

  test("should getMachineSteps return steps based on entries parameters", () => {
    const sut = new MachineSteps(STATES2, TRANSITIONS2);
    const expectedMachineSteps = [
      { name: "J", transitions: { "0": "J", "1": "K" } },
      { name: "K", transitions: { "0": "8", "1": "J" } },
      { name: "8", transitions: { "0": "K", "1": "8" } },
    ];

    expect(sut.getMachineSteps()).toEqual(expectedMachineSteps);
  });
});
