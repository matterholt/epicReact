# Tid-bits of interest

1.  Difference of the two types of programing
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

2.  To work with Rect will need to load 2 script files. One responsible in creating the elements added to the DOM and the second is adding the elements to the DOM (append)

    - React supports native and VR and web

    - JSX is syntactic sugar for calling

      ```js
      React.createElement("tag", [prop], children);
      ```

    - unpkg -> access code on npm, and get it on the browser

      ```html
      <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
      ```
