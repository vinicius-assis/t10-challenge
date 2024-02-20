import { ModuleThree } from ".";
import { STATES, TRANSITIONS } from "../utils/constants";

describe("ModuleThree", () => {
  test("should throw an error if no valid states is provided", () => {
    expect(() => new ModuleThree([], TRANSITIONS)).toThrow(
      "Invalid states parameter"
    );
  });

  test("should throw an error if no transitions states is provided", () => {
    expect(() => new ModuleThree(STATES, {})).toThrow(
      "Invalid transitions parameter"
    );
  });
});
