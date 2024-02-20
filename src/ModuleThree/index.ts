import { InvalidParameterError } from "../erros/InvalidParameterError";

export class ModuleThree {
  states: IStates;

  constructor(states: IStates) {
    if (!states || !states.length) {
      throw new InvalidParameterError("states");
    }
    this.states = states;
  }
}
