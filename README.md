# ModuleThree Documentation

## Overview

The ModuleThree class implements functionality for a finite state machine defined by states, transitions, alphabet, initial state, and accept states.

#### Usage

```js
import { ModuleThree } from "./ModuleThree";

// Example states, transitions, alphabet, initial state, and accept states
const states = { A: {}, B: {} };
const transitions = { A: { a: "B" }, B: { b: "A" } };
const alphabet = ["a", "b"];
const initialState = "A";
const acceptStates = ["B"];

// Create an instance of ModuleThree
const moduleThree = new ModuleThree(
  states,
  transitions,
  alphabet,
  initialState,
  acceptStates
);

// Run the finite state machine with input
const output = moduleThree.run("ab");

console.log(output); // Output: Input: 'ab', Output: 'A'
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
  const output = moduleThree.run("ab");
  console.log(output); // Output: Input: 'ab', Output: 'A'
} catch (error) {
  console.error(error.message);
}
```
