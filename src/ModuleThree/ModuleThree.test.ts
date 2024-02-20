import { ModuleThree } from ".";
import {
  ALPHABET,
  INITIAL_STATE,
  STATES,
  TRANSITIONS,
} from "../utils/constants";

describe("ModuleThree", () => {
  test("should throw an error if no valid states parameter is provided", () => {
    expect(
      () => new ModuleThree([], TRANSITIONS, ALPHABET, INITIAL_STATE)
    ).toThrow("Invalid states parameter");
  });

  test("should throw an error if no transitions parameter is provided", () => {
    expect(() => new ModuleThree(STATES, {}, ALPHABET, INITIAL_STATE)).toThrow(
      "Invalid transitions parameter"
    );
  });

  test("should throw an error if no alphabet parameter is provided", () => {
    expect(
      () => new ModuleThree(STATES, TRANSITIONS, [], INITIAL_STATE)
    ).toThrow("Invalid alphabet parameter");
  });

  test("should throw an error if no initialState parameter is provided", () => {
    expect(() => new ModuleThree(STATES, TRANSITIONS, ALPHABET, "")).toThrow(
      "Invalid initialState parameter"
    );
  });
});
