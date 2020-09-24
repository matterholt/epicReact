# JS IN REACT

## TEMPLATE LITERALS

Template literals made it into the js on ES6 or es2015.
Easily add variables to string with out ending quotes and concat

Below is an example of how to implement them. within the console.log there are what is called backtick --> `. Only then we are able to use variables as they are inside the \${}. Not only variables are displayed, but the spacing and new line are also depicted in the console when it is printed.

```js
const greeting = "hello";
const subject = "world";
console.log(`${greeting}, to the ${subject}`);
```

Before template literals would have to concat the string and variables using the + symbol. The same result different executions

```js
const greeting = "hello";
const subject = "world";
console.log(greeting + " , to the " + subject);
```

To use in React is when props in to children
like a css class variable is one prop that will determine like the color or size.

```js
function Box({ className, ...props }) {
  return <div className={`box ${className}`} {...props} />;
}
```

Next.js and other css in js uses the template literal to define css properties.

```js
// NEXT
function Box({ classProp, ...props }) {
  return (
    <div className="squareRedBox">
      <style jsx>{`
        .squareRedBox {
          height: 90px;
          width: 90px;
          background-color: ${classProp};
        }
      `}</style>
    </div>
  );
}
```

The thing to remember is tha that template literals can be used in any javaScript code base. Reduces the complexity of getting the variables into a place where the code can use them. Also don't have to worry about adding extra spaces in the strings.
