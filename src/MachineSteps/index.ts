type ITransitions = { [key: string]: { [key: string]: string } };

export class MachineSteps {
  states: string[];
  transitions: ITransitions;
  constructor(states: string[], transitions: ITransitions) {
    if (!states || !states.length) {
      throw new Error("Invalid states parameter");
    }

    if (!transitions || !Object.values(transitions).length) {
      throw new Error("Invalid transitions parameter");
    }

    this.states = states;
    this.transitions = transitions;
  }
}
