# ModuleThree Documentation

The `ModuleThree` class is a part of a Finite State Machine (FSM) implementation that determines if a binary number is divisible by three and calculates the remainder. It is designed to process input strings consisting of binary digits ("0" and "1") and return a message indicating whether the number is divisible by three and what the remainder is.

## Dependencies

- `MachineSteps`: A class that manages the steps of the FSM.
- `InvalidInputError`: A custom error class for invalid input.
- `InvalidOutputError`: A custom error class for invalid output.
- `InvalidParameterError`: A custom error class for invalid parameters.
- `IModuleThree`, `IStates`, `ITransitions`: Interfaces that define the structure of the module and the FSM.

## Properties

- `states`: An array of strings representing the states of the FSM (`["S0", "S1", "S2"]`).
- `transitions`: An object representing the state transitions based on input.
- `alphabet`: An array of strings representing the valid input symbols (`["0", "1"]`).
- `initialState`: A string representing the initial state of the FSM (`"S0"`).
- `acceptStates`: An array of strings representing the states that are considered valid for acceptance.

## Methods

### `run(input: string): string`

This is the main method of the `ModuleThree` class. It takes a binary string as input and returns a message indicating whether the number represented by the binary string is divisible by three and what the remainder is.

#### Parameters

- `input`: A string consisting of binary digits ("0" and "1").

#### Returns

- A string message indicating whether the input is divisible by three and the remainder.

#### Example

```typescript
const moduleThree = new ModuleThree();
const result = moduleThree.run("101");
console.log(result); // "101 is not divisible by 3, remainder: 2"
```

### `calculateFinalState(input: string): string`

This method calculates the final state of the FSM based on the input string. It is used internally by the `run` method.

#### Parameters

- `input`: A string consisting of binary digits ("0" and "1").

#### Returns

- A string representing the final state of the FSM.

#### Throws

- `InvalidParameterError`: If the input string is empty or null.
- `InvalidInputError`: If the input string contains characters other than "0" or "1".
- `InvalidOutputError`: If the final state is not one of the accept states.

## Error Handling

The `ModuleThree` class uses custom error classes to handle invalid inputs, outputs, and parameters:

- `InvalidInputError`: Thrown when the input string contains invalid characters.
- `InvalidOutputError`: Thrown when the final state is not an accept state or is undefined.
- `InvalidParameterError`: Thrown when the input string is empty or null.

## Usage

To use the `ModuleThree` class, you need to create an instance of the class and call the `run` method with a binary string as the argument. The method will return a message indicating whether the number is divisible by three and what the remainder is.

```typescript
const moduleThree = new ModuleThree();
const result = moduleThree.run("110");
console.log(result); // "110 is divisible by 3, remainder: 0"
```

## Conclusion

The `ModuleThree` class provides a simple and efficient way to determine if a binary number is divisible by three and to calculate the remainder using a Finite State Machine approach. With clear error handling and a straightforward interface, it is easy to integrate into larger projects or use as a standalone module.
