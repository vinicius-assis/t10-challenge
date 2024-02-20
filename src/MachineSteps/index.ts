export class MachineSteps implements IMachineSteps {
  states: IStates;
  transitions: ITransitions;
  constructor(states: IStates, transitions: ITransitions) {
    if (!states || !states.length) {
      throw new Error("Invalid states parameter");
    }

    if (!transitions || !Object.values(transitions).length) {
      throw new Error("Invalid transitions parameter");
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
