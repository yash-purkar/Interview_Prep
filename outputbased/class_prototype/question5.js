function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

const yash = new Person("Yash");

console.log(yash.sayName());
console.log(Person.prototype.sayName());
console.log(Object.getPrototypeOf(yash).sayName());
console.log(yash.__proto__.sayName());
