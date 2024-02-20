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

  getMachineSteps(): any {
    return [
      { name: "A", transitions: { "0": "A", "1": "B" } },
      { name: "B", transitions: { "0": "C", "1": "A" } },
      { name: "C", transitions: { "0": "B", "1": "C" } },
    ];
  }
}
