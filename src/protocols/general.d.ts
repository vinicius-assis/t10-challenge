type ITransitions = { [key: string]: { [key: string]: string } };

type IStates = string[];

export interface ISteps {
  name: string;
  transitions: { [key: string]: string };
}

export interface IMachineSteps {
  getMachineSteps(): ISteps[];
}

export interface IModuleThree {
  run(input: string): string;
}
