export class MachineSteps {
  states: string[];
  constructor(states: string[]) {
    if (!states || !states.length) {
      throw new Error("Invalid states parameter");
    }

    this.states = states;
  }
}
