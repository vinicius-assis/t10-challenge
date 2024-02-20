import { InvalidParameterError } from "../erros/InvalidParameterError";

export class ModuleThree {
  states: IStates;
  transitions: ITransitions;
  alphabet: string[];

  constructor(states: IStates, transitions: ITransitions, alphabet: string[]) {
    if (!states || !states.length) {
      throw new InvalidParameterError("states");
    }

    if (!alphabet || !alphabet.length) {
      throw new InvalidParameterError("alphabet");
    }

    if (!transitions || !Object.values(transitions).length) {
      throw new InvalidParameterError("transitions");
    }

    this.states = states;
    this.transitions = transitions;
    this.alphabet = alphabet;
  }
}
