# React forms

Making react form with Parcel and React.

## Parcel set up

Parcel... Blazing fast, zero configuration web application bundler

npm install 3 packages, 2 react, 1 parcel. Then we need only a index.html, and a index.js file. Just with the few thing able to get a minium React app running.

## Building the React form KCD epic react

- React should have a handle submit function that will take all the inputs in the form.

- The default behavior of the browser is to perform a GET HTTP request. to the current URL with the current values of the form. as query params. full page refresh. need name or id on the inputs.

- for single page apps, we don't need a full page refresh so we add a `event.preventDefault()`

- when console.log(event). A syntheticEvent. which is an Object that React creates. that mimic an exactly actual DOM event. do this for performance and event delegations. Able to access the actual event but `event.nativeEvent`

- properties of DOM node use `console.dir()`

- better to select form elements by selecting the element input name or id

- `htmlFor` is the DOM property of `for`. Is needed on labels to function properly, such as clicking on the label.

- React has a reference node that can be used to get values from input. "he only difference between useRef() and creating a {current: ...} object yourself is that useRef will give you the same ref object on every render."[React docs](https://reactjs.org/docs/hooks-reference.html#useref)

```js
// inside a component....

// init the refNode
const refNode = React.useRef(null);

function handleSubmit(e) {
  const userInput = refNode.current.value;
}

// inside jsx inside component
<input ref={refNode} />;
```

- React.useState -> accepts a default initial value and returns an array. Commonly will be deconstructed.

- Instead of using if statements Epic react

  ```js
  // How I made the logic
  function handleChange(e) {
    const value = e.target.value;
    if (value === value.toLowerCase()) {
      setError("Error on the input");
    }
  }

  // Better way
  function handleChange(e) {
    const { value } = e.target; // deconstruct
    const isLowerCase = value === value.toLowerCase(); // will return True or False, remove the if statement and is Cleaner code.
    setError(isLowerCase ? null : "Error on the input");
  }
  ```

- controlled inputs, adding a value to the input allows React to control the value in the input. Should have a onChange handler to let React control the value and ensure that they values match.
