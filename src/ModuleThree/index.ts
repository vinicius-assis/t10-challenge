import { MachineSteps } from "../MachineSteps";
import { InvalidInputError } from "../erros/InvalidInputError";
import { InvalidOutputError } from "../erros/InvalidOutputError";
import { InvalidParameterError } from "../erros/InvalidParameterError";
import { IModuleThree, IStates, ITransitions } from "../protocols/general";

const remainderStates: { [key: string]: number } = {
  S0: 0,
  S1: 1,
  S2: 2,
};

export class ModuleThree implements IModuleThree {
  private states: IStates = ["S0", "S1", "S2"];
  private transitions: ITransitions = {
    S0: { "0": "S0", "1": "S1" },
    S1: { "0": "S2", "1": "S0" },
    S2: { "0": "S1", "1": "S2" },
  };
  private alphabet: string[] = ["0", "1"];
  private initialState: string = "S0";
  private acceptStates: string[] = ["S0", "S1", "S2"];

  private calculateFinalState(input: string): string {
    if (!input?.length) {
      throw new InvalidParameterError();
    }

    const steps = new MachineSteps(
      this.states,
      this.transitions
    ).getMachineSteps();
    let currentState = steps.find((step) => step.name === this.initialState);

    for (let element of input) {
      if (!this.alphabet.includes(element)) {
        throw new InvalidInputError(element);
      }

      currentState = steps.find(
        (step) => step.name === currentState?.transitions[element]
      );

      if (currentState && !this.acceptStates.includes(currentState.name)) {
        throw new InvalidOutputError(currentState.name);
      }
    }

    if (!currentState) {
      throw new InvalidOutputError("Final state is undefined");
    }

    return currentState.name;
  }

  run(input: string): string {
    const finalState = this.calculateFinalState(input);
    const remainder = remainderStates[finalState];
    return `${input} is ${
      remainder ? "not " : ""
    }divisible by 3, remainder: ${remainder}`;
  }
}
