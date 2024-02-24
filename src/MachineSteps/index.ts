import { InvalidParameterError } from "../erros/InvalidParameterError";
import {
  IMachineSteps,
  IStates,
  ISteps,
  ITransitions,
} from "../protocols/general";

export class MachineSteps implements IMachineSteps {
  private states: IStates;
  private transitions: ITransitions;

  constructor(states: IStates, transitions: ITransitions) {
    this.validateParameters(states, transitions);
    this.states = states;
    this.transitions = transitions;
  }

  private validateParameters(states: IStates, transitions: ITransitions): void {
    if (!states || !states.length) {
      throw new InvalidParameterError("States parameter is missing or empty.");
    }

    if (!transitions || !Object.keys(transitions).length) {
      throw new InvalidParameterError(
        "Transitions parameter is missing or empty."
      );
    }
  }

  public getMachineSteps(): ISteps[] {
    return this.states.map((state) => ({
      name: state,
      transitions: this.transitions[state],
    }));
  }
}
