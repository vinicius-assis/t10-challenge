import { ModuleThree } from ".";
import {
  ACCEPT_STATES,
  ALPHABET,
  INITIAL_STATE,
  STATES,
  TRANSITIONS,
} from "../utils/constants";

describe("ModuleThree", () => {
  test("should throw an error if no valid states parameter is provided", () => {
    expect(
      () =>
        new ModuleThree([], TRANSITIONS, ALPHABET, INITIAL_STATE, ACCEPT_STATES)
    ).toThrow("Invalid states parameter");
  });

  test("should throw an error if no valid transitions parameter is provided", () => {
    expect(
      () => new ModuleThree(STATES, {}, ALPHABET, INITIAL_STATE, ACCEPT_STATES)
    ).toThrow("Invalid transitions parameter");
  });

  test("should throw an error if no valid alphabet parameter is provided", () => {
    expect(
      () =>
        new ModuleThree(STATES, TRANSITIONS, [], INITIAL_STATE, ACCEPT_STATES)
    ).toThrow("Invalid alphabet parameter");
  });

  test("should throw an error if no valid initialState parameter is provided", () => {
    expect(
      () => new ModuleThree(STATES, TRANSITIONS, ALPHABET, "", ACCEPT_STATES)
    ).toThrow("Invalid initialState parameter");
  });

  test("should throw an error if no valid acceptStates parameter is provided", () => {
    expect(
      () => new ModuleThree(STATES, TRANSITIONS, ALPHABET, INITIAL_STATE, [])
    ).toThrow("Invalid acceptStates parameter");
  });
});
