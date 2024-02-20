import { ModuleThree } from ".";
import {
  ACCEPT_STATES,
  ACCEPT_STATES2,
  ALPHABET,
  ALPHABET2,
  INITIAL_STATE,
  STATES,
  STATES2,
  TRANSITIONS,
  TRANSITIONS2,
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

  test("should run() throw an error if no valid parameter is provided", () => {
    const sut = new ModuleThree(
      STATES,
      TRANSITIONS,
      ALPHABET,
      INITIAL_STATE,
      ACCEPT_STATES
    );

    expect(() => sut.run("")).toThrow("Invalid parameter");
  });

  test(`should run('10') return 'Input: "10", Output: "C"'`, () => {
    const sut = new ModuleThree(
      STATES,
      TRANSITIONS,
      ALPHABET,
      INITIAL_STATE,
      ACCEPT_STATES
    );

    expect(sut.run("10")).toBe("Input: '10', Output: 'C'");
  });

  test(`should run('100') return 'Input: "100", Output: "B"'`, () => {
    const sut = new ModuleThree(
      STATES,
      TRANSITIONS,
      ALPHABET,
      INITIAL_STATE,
      ACCEPT_STATES
    );

    expect(sut.run("100")).toBe("Input: '100', Output: 'B'");
  });

  test(`should run throw an error if states and transitions parameters are incompatible`, () => {
    const sut = new ModuleThree(
      STATES2,
      TRANSITIONS,
      ALPHABET,
      INITIAL_STATE,
      ACCEPT_STATES
    );

    expect(() => sut.run("100")).toThrow("Invalid parameter");
  });

  test(`should run throw an error if input ins't include on alphabet`, () => {
    const sut = new ModuleThree(
      STATES,
      TRANSITIONS,
      ALPHABET2,
      INITIAL_STATE,
      ACCEPT_STATES
    );

    expect(() => sut.run("100")).toThrow("Invalid input element: 1");
  });

  test(`should run throw an error if output ins't include on acceptStates`, () => {
    const sut = new ModuleThree(
      STATES,
      TRANSITIONS,
      ALPHABET,
      INITIAL_STATE,
      ACCEPT_STATES2
    );

    expect(() => sut.run("100")).toThrow("Invalid output value");
  });
});
