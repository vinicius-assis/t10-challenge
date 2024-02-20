import { InvalidParameterError } from "../erros/InvalidParameterError";
import {
  IMachineSteps,
  IStates,
  ISteps,
  ITransitions,
} from "../protocols/general";

export class MachineSteps implements IMachineSteps {
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

  getMachineSteps(): ISteps[] {
    return this.states.map((state) => ({
      name: state,
      transitions: this.transitions[state],
    }));
  }
}
