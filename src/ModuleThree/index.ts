export class ModuleThree {
  states: IStates;

  constructor(states: IStates) {
    if (!states || !states.length) {
      throw new Error("Invalid states parameter");
    }
    this.states = states;
  }
}
