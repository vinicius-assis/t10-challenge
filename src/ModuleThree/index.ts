import { InvalidParameterError } from "../erros/InvalidParameterError";

export class ModuleThree {
  states: IStates;
  transitions: ITransitions;

  constructor(states: IStates, transitions: ITransitions) {
    if (!states || !states.length) {
      throw new InvalidParameterError("states");
    }

    if (!transitions || !Object.values(transitions).length) {
      throw new InvalidParameterError("transitions");
    }

    this.states = states;
    this.transitions = transitions;
  }
}
