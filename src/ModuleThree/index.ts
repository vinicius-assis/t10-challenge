import { MachineSteps } from "../MachineSteps";
import { InvalidInputError } from "../erros/InvalidInputError";
import { InvalidParameterError } from "../erros/InvalidParameterError";

export class ModuleThree {
  states: IStates;
  transitions: ITransitions;
  alphabet: string[];
  initialState: string;
  acceptStates: string[];

  constructor(
    states: IStates,
    transitions: ITransitions,
    alphabet: string[],
    initialState: string,
    acceptStates: string[]
  ) {
    if (!initialState?.length) {
      throw new InvalidParameterError("initialState");
    }
    if (!states || !states.length) {
      throw new InvalidParameterError("states");
    }

    if (!alphabet || !alphabet.length) {
      throw new InvalidParameterError("alphabet");
    }

    if (!acceptStates || !acceptStates.length) {
      throw new InvalidParameterError("acceptStates");
    }

    if (!transitions || !Object.values(transitions).length) {
      throw new InvalidParameterError("transitions");
    }

    this.states = states;
    this.transitions = transitions;
    this.alphabet = alphabet;
    this.initialState = initialState;
    this.acceptStates = acceptStates;
  }

  run(input: string): any {
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
        throw new Error("Invalid output value");
      }
      if (!state) {
        throw new InvalidParameterError();
      }
      currentState = state;
    }

    return `Input: '${input}', Output: '${currentState?.name}'`;
  }
}
