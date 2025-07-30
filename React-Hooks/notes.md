# React Hooks

### _Definition:_

## useRef

- It allow us to create mutable variables, which will not re-render the component.
- Also used for accessing DOM elements

## useMemo

- It returns a memoized value.
- It's like caching a value so that it doesn't need to be recalculated.
- It runs only when one of it's dependencies gets updated.
- It improves performance.

- useMemo is similar to useCallback. It also improves performance.
- but useMemo returns memoized value
- and useCallback returns a memoized function.

## useCallback

- It cache a function definition between re-renders.
- It prevents creation of multiple instances of same function when re-render happens.

## useContext

- Used to create Global data.
- That data can be accessed from any component without passing through props at every component level.
-

## useReducer

- similar to useState but it provides state and dispatch function instead of state and setter function.
