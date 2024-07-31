class Person {
  constructor(name) {
    this.name = name;
  }

  print = () => {
    console.log(this.name);
  };
}

class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  print() {
    console.log(this.name, this.id);
  }
}

const one = new Person("one");
one.print();

const two = new Employee("two", 2);
two.print();

/*

1st We created the class Person and inside the Person we assigned this.name to name, so when ever anyone will use this class will get name in a object.

and there is another print method where we have used arrow function to define the print method. Which just print the value of name in the console.

-----

Then we created class Employee and extends Person means all method of Person class can be used by Employee class and to call the constructor of the Person class we can use super() function.

So, in constructor of Employee we called the constructor of Person using super() and pass a name to it. And assigned value to id.

and there is also print() method in employee class (which might override the print method of Person class) and this print() method now prints the name and the id.

-----

Then we created the instance of Person class, passed "one" and stored in one variable.

Same,

We created the instance of Employee class, passed "two" , 2 and stored in two.

-----

So It should print the
"one"
"two" 2

bcz it will override print method of Person.
But it is not correct output.

because, When we define a method using an arrow function (as with print in the Person class), this method gets assigned as a property directly on each instance of the class. It doesn't go on the prototype.

But in case of normal function keyword it works bit different.

When we define method and use normal function it does not store in the object, it directly stores in the prototype of that object.

So in our case the print method of Person object will be there in object, and the print method of Employee will be there in prototype of that object.

So whenever we'll call any of them it will first try to find in the nearest scope, and if it does not found that it will go prototype and so on.

So in both cases
one.print()
and
two.print()

the print method of Person is in the object itself so it will be invoked, and output would be

one
two


1.
undefined
undefined 2

2.
one
two

3.
one
two 2

4. one
two undefined
*/

