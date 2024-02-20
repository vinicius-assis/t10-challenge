import { ModuleThree } from "./ModuleThree";
const STATES = ["S0", "S1", "S2"];
const TRANSITIONS = {
  S0: { "0": "S0", "1": "S1" },
  S1: { "0": "S2", "1": "S0" },
  S2: { "0": "S1", "1": "S2" },
};
const ALPHABET = ["0", "1"];
const ACCEPT_STATES = ["S0", "S1", "S2"];
const INITIAL_STATE = "S0";

const moduleThree = new ModuleThree(
  STATES,
  TRANSITIONS,
  ALPHABET,
  INITIAL_STATE,
  ACCEPT_STATES
);

console.log(moduleThree.run("110"));
console.log(moduleThree.run("1010"));
console.log(moduleThree.run("101"));
