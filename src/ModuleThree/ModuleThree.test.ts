import { ModuleThree } from ".";

describe("ModuleThree", () => {
  test("should run() throw an error if no valid parameter is provided", () => {
    const sut = new ModuleThree();

    expect(() => sut.run("")).toThrow("Invalid parameter");
  });

  test(`should run('10') return 'Input: "10", Output: "S2"'`, () => {
    const sut = new ModuleThree();

    expect(sut.run("10")).toBe("Input: '10', Output: 'S2'");
  });

  test(`should run('100') return 'Input: "100", Output: "S1"'`, () => {
    const sut = new ModuleThree();

    expect(sut.run("100")).toBe("Input: '100', Output: 'S1'");
  });

  test(`should run throw an error if input ins't include on alphabet`, () => {
    const sut = new ModuleThree();

    expect(() => sut.run("109")).toThrow("Invalid input element: 9");
  });
});
