// Short Hand Props,
// An object initializer is an expression that describes the initialization of an Object
// it is not necessary but reduce some repetitiveness

const a = "hello";
const b = 42;
const c = { d: [true, false] };

// if the object key is the same as the value then there is not
// a need to "declare" a object with the same key

// example short hand
console.log({ a, b, c });

// before es6 / es15
console.log({ a: a, b: b, c: c });

// side note able to do the same for methods
function getData(name, user, image) {
  return {
    name,
    user,
    image,
    time: Date.now(),
    save() {
      console.log(`${name} has been saved`); // method shorthand
    },
  };
}
const bob = getData("bob", "bobby", "face.js");
console.log(bob);

const save = bob.save();
