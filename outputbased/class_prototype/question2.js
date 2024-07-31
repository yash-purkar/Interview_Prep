function Person(name) {
  this.name = name;
}

Person.prototype.getName = () => {
  return this.name;
};

const yash = new Person("Yash");
console.log(yash.getName());

/* 1st we define the Person function which simple assign the name value
Then we added getName in the prototype of Person
Then we created instance of Person by passing the "Yash" (it is same like we do with class)

then we consoled the yash.getName();
So it should print the "Yash", but it won't
because

we have assigned the arrow function to the getName and arrow function does not have there own 'this' context, instead they inherit 'this' from surrounding scope at the time they are defined, which is the global context in the non-strict mode and the undefined in the strict mode.

So when we tries to access getName() (the value of 'this' will be global object bcz getName is defined in the global context), so It will try to find the name in the global scope, and it is not there so it would print undefined.

1. undefined
2. Yash
3. ReferenceError: this is not defined
4. null

*/