import { MachineSteps } from "../MachineSteps";
import { InvalidInputError } from "../erros/InvalidInputError";
import { InvalidOutputError } from "../erros/InvalidOutputError";
import { InvalidParameterError } from "../erros/InvalidParameterError";
import { IModuleThree, IStates, ITransitions } from "../protocols/general";

export class ModuleThree implements IModuleThree {
  private states: IStates;
  private transitions: ITransitions;
  private alphabet: string[];
  private initialState: string;
  private acceptStates: string[];

  constructor() {
    this.states = ["S0", "S1", "S2"];
    this.alphabet = ["0", "1"];
    this.initialState = "S0";
    this.acceptStates = ["S0", "S1", "S2"];
    this.transitions = {
      S0: { "0": "S0", "1": "S1" },
      S1: { "0": "S2", "1": "S0" },
      S2: { "0": "S1", "1": "S2" },
    };
  }

  private getFinalState(input: string): string | undefined {
    if (!input?.length) {
      throw new InvalidParameterError();
    }

    const steps = new MachineSteps(
      this.states,
      this.transitions
    ).getMachineSteps();

    const initialState = steps.find((step) => step.name === this.initialState);
    let currentState = initialState;
    for (let element of input) {
      if (!this.alphabet.includes(element)) {
        throw new InvalidInputError(element);
      }

      const state = steps.find(
        (step) => step.name === currentState?.transitions[element]
      );

      if (state && !this.acceptStates.includes(state.name)) {
        throw new InvalidOutputError(state.name);
      }

      currentState = state;
    }

    return currentState?.name;
  }

  run(input: string): string {
    const state = this.getFinalState(input);
    if (!state) {
      throw new InvalidOutputError();
    }

    return `Input: '${input}', Output: '${state}'`;
  }
}
