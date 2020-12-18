---
title: First advance hook useReducer
date: 2020-11-10
published: true
slug: useReducer help manage complicated state
---
Notes are built around Kent C. Dodd's Epic React workshops

## NOTES

- useReducer help when there is multiple states that need to be changed and when you would like to separate state logic from the component that make the state changes

- If coming with a background in redux, convention of the switch, dispatch and actions is not vital to the useReducer hook.

- The useReducer takes two arguments  1. reducer function, 2. would be the initial

- Typically would use the useReducer hook with a object of state.

- If comparing the useReducer to useState. useState return state and a function to update state directly. where as useReducer provides a dispatch function which delegates the actual state update logic to the reducer.

```js

const reducerFunction =(state, step)=> state + step

function Counter (step=1, initState = 0){
    const [count, changeCount] = useReducer(reducerFunction,initState)
    const increment = ()=>changeCount(step)
    return <button onClick={increment}>{count}<button>
}

```

## Common redux method

- Most common but not always the best way to accomplish the task at hand.

- useReducer is a hook that takes the function and the initial state as an argument. what ever is return from the the reducer would be new state.

- 
 
- !!! Not to use useReducer. when handling simple state and there is one state that is being manage. such as setting the what color preference the user prefer

- Kent C Dodds says
  - "When it's just an independent element of state you're managing: useState"

  - When one element of your state relies on the value of another element of your state in order to update: useReducer

    [Should I useState or useReducer?](https://kentcdodds.com/blog/should-i-usestate-or-usereducer)

- To have an idea of when to use a useReducer would be an undo feature. where there is multiple states that need to be handled. current, past and next all have to be updated when the component get updated.

- Traditionally would past the reducer function an action object. In the object would have a type of action a string describing what would be done to the initial state.

- The state of the values are all ready been initialized with in the useReducer function and in scope of the reducer function. Then be past in as an argument.

- The dispatch from the useReducer hook returns a function to which we will pass an object argument. The object will have the type of action to perform and any props needed to modify the state

- easily add more cases pertaining to the state to which it is modifying.

- Good practice to throw an new Error to inform developers



```js

// example of what a reducer function could look like
function countReducer (state, action){
    switch(action.type){

        case : "INCREASE": 
        // return all state, and what ever changes to the state object
            return {...state, state.count + action.step}

        case : "DECREASE": 
        // able to have multiple 
            return {...state, state.count - action.step}

        default : 
        // add when the action type does is not with
            throw new Error(`Unsupported Action Type ${action.type}`)
    }
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({ type: 'INCREMENT', step })
  const decrease = () => dispatch({type: 'DECREASE', step})
  

  return (
  <div>
  <h2>{count}</h2>
      <button onClick={increment}>INCREASE</button>
      <button onClick={decrease}>DECREASE</button>
  </div>)

}



```