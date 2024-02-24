import { ModuleThree } from ".";

describe("ModuleThree", () => {
  test("should run() throw an error if no valid parameter is provided", () => {
    const sut = new ModuleThree();

    expect(() => sut.run("")).toThrow("Invalid parameter");
  });

  test(`should run('10') return "10 is not divisible by 3, remainder: 2"`, () => {
    const sut = new ModuleThree();

    expect(sut.run("10")).toBe("10 is not divisible by 3, remainder: 2");
  });

  test(`should run('100') return "100 is not divisible by 3, remainder: 1"`, () => {
    const sut = new ModuleThree();

    expect(sut.run("100")).toBe("100 is not divisible by 3, remainder: 1");
  });

  test(`should run('1100') return "1100 is divisible by 3, remainder: 0"`, () => {
    const sut = new ModuleThree();

    expect(sut.run("1100")).toBe("1100 is divisible by 3, remainder: 0");
  });

  test(`should run throw an error if input ins't include on alphabet`, () => {
    const sut = new ModuleThree();

    expect(() => sut.run("109")).toThrow("Invalid input element: 9");
  });
});
