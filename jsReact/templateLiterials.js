// -> TEMPLATE LITERALS
// easily add variables to string with out ending quotes and concat
const greeting = "hello";
const subject = "world";

console.log(`${greeting}, to the ${subject}`);

// without template literals, note the spaces
console.log(greeting + " , to the " + subject);

// how to use in React

function Box({ className, ...props }) {
  // a css class variable is one prop that will determine like the color or size
  return <div className={`box ${className}`} {...props} />;
}
