# ModuleThree Documentation

## Overview

The ModuleThree class implements functionality for a finite state machine defined by states, transitions, alphabet, initial state, and accept states.

#### Usage

```js
import { ModuleThree } from "./ModuleThree";

// Example states, transitions, alphabet, initial state, and accept states
const states = ["A", "B", "C"];
const transitions = {
  A: { 0: "A", 1: "B" },
  B: { 0: "C", 1: "A" },
  C: { 0: "B", 1: "C" },
};
const alphabet = ["0", "1"];
const initialState = "A";
const acceptStates = ["A", "B", "C"];

// Create an instance of ModuleThree
const moduleThree = new ModuleThree(
  states,
  transitions,
  alphabet,
  initialState,
  acceptStates
);

// Run the finite state machine with input
const output = moduleThree.run("10");

console.log(output); // Output: Input: 'ab', Output: 'C'
```

#### Constructor

```js
constructor(
  states: IStates,
  transitions: ITransitions,
  alphabet: string[],
  initialState: string,
  acceptStates: string[]
)
```

- states: An object representing the states of the finite state machine.
- transitions: An object representing the transitions between states based on input symbols.
- alphabet: An array of strings representing the input alphabet.
- initialState: A string representing the initial state of the finite state machine.
- acceptStates: An array of strings representing the accept states of the finite state machine.

#### Method

##### run

```js
run(input: string): string
```

- input: A string representing the input sequence.
- Returns: A string representing the output state after processing the input sequence.

#### Exceptions

- Throws InvalidParameterError if any required parameter is missing or invalid.
- Throws InvalidInputError if the input contains symbols not present in the alphabet.
- Throws InvalidOutputError if the output state is not valid.

##### Example

```js
try {
  const output = moduleThree.run("100");
  console.log(output); // Output: Input: 'ab', Output: 'B'
} catch (error) {
  console.error(error.message);
}
```
