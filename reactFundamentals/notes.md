# Tid-bits of interest

## Vanilla JS

Difference of the two types of programing
React abstract the Imperative browser API.

    Definition:
    “You know, imperative programming is like how you do something, and declarative programming is more like what you do, or something.”

    Imperative would something like telling someone that you want chocolate chip cookies and you proceed to tell them exactly how to make the cookies.
    Declarative would be hey can you get me a chocolate chip cookie.

    so one has very specific how to get the chocolate chip cookies in your belly. where the other doesn't really care about how the chocolate get in your belly just require the cookies.

    "Am I going to drive an imperative stick shift car or a declarative automatic -Tyler McGinnis"

    Functional Programing is a subset of declarative programing. Create function to execute a task and just call on it an you are not worried how the task is performed. map() vrs traditional For loop.

    Other saying ideas on how to think about declarative programming

         "Declarative programming is “the act of programming in languages that conform to the mental model of the developer rather than the operational model of the machine.”

         "In computer science, declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow."

    [Imperative vs Declarative Programming](https://ui.dev/imperative-vs-declarative-programming/)

## Writing Raw React Elements

- To work with Rect will need to load 2 script files. One responsible in creating the elements added to the DOM and the second is adding the elements to the DOM (append)

  - JSX is syntactic sugar for calling

    ```js
    // React API to crate DOM elements

    React.createElement("tag", [prop], children);
    ```

  - unpkg -> access code on npm, and get it on the browser

    ```html
    <!-- index.html script tag in the head -->
    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
    ```

## The JSX Markup

- HTML-like syntactic sugar

- example on what jsx converts to

  ```js
  // Example of what JSX compiles to

  const uiElement = <p id="contain"> The quick fox</p>; //JSX

  const uiElement = React.createElement("p", {
    id: "contain",
    children: "The quick fox",
  }); // compiled version
  ```

- check out how jsx gets compiled down to..
  [jsx babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=usage&spec=false&loose=false&code_lz=MYewdgzgLgBArgSxgXhgHgCYIG4D40QAOAhmLgBICmANtSGgPRGm7rNkDqIATtRo-3wMseAFBA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=true&targets=&version=7.11.6&externalPlugins=)

- Compile Babel on the fly. In the browser at the head there will be a script tag that will have our compiled react code specificity JSX

````html
<!-- index.html script tag in the head -->
<script src="https://unpkg.com/@babel/standalone@7.9.3/babel.js"></script>


<!-- index.html script tag in the body , let browser will not process til babel compiles it, with correct type -->
  <script type="text/babel"><script>
``


- JSX, and it is a syntax extension to JavaScript, Embedding Expressions,an Expression,Specify Attributes, Specify Children, Prevents Injection Attacks, Represents Objects,

- JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

- React DOM escapes any values embedded in JSX before rendering them
  ```js
  // Note: this structure is simplified React docs
  const element = {
    type: "h1",
    props: {
      className: "greeting",
      children: "Hello, world!",
    },
  };
````

- "Interpolation" is defined as "the insertion of something of a different nature into something else.", template literals in JS

- with the curly brackets --> `{}` we can jump in and out of JS land when we are in JSX land. inside curly bracket most JS can be performed.

- why we can do statement inside curly brackets, because will be added into the React.createElement as a argument
