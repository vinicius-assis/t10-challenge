export const TRANSITIONS = {
  A: { "0": "A", "1": "B" },
  B: { "0": "C", "1": "A" },
  C: { "0": "B", "1": "C" },
};

export const STATES = ["A", "B", "C"];
export const ACCEPT_STATES = ["A", "B", "C"];

export const INITIAL_STATE = "A";

export const ALPHABET = ["0", "1"];

export const TRANSITIONS2 = {
  J: { "0": "J", "1": "K" },
  K: { "0": "8", "1": "J" },
  8: { "0": "K", "1": "8" },
};

export const STATES2 = ["J", "K", "8"];
