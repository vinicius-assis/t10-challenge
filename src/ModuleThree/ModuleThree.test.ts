import { ModuleThree } from ".";
import { ALPHABET, STATES, TRANSITIONS } from "../utils/constants";

describe("ModuleThree", () => {
  test("should throw an error if no valid states parameter is provided", () => {
    expect(() => new ModuleThree([], TRANSITIONS, ALPHABET)).toThrow(
      "Invalid states parameter"
    );
  });

  test("should throw an error if no transitions parameter is provided", () => {
    expect(() => new ModuleThree(STATES, {}, ALPHABET)).toThrow(
      "Invalid transitions parameter"
    );
  });

  test("should throw an error if no alphabet parameter is provided", () => {
    expect(() => new ModuleThree(STATES, TRANSITIONS, [])).toThrow(
      "Invalid alphabet parameter"
    );
  });
});
