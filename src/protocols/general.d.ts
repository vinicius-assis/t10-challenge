type ITransitions = { [key: string]: { [key: string]: string } };

type IStates = string[];

interface ISteps {
  name: string;
  transitions: { [key: string]: string };
}

interface IMachineSteps {
  getMachineSteps(): ISteps[];
}

interface IModuleThree {
  run(input: string): string;
}
