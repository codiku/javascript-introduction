function sayHi(name, age) {
  console.log(
    "Hello " + name + ", you are " + age + " years old, how are you doing ? "
  );
}

function sayBye(name, age) {
  console.log(
    "Bye " + name + ", you are " + age + " years old, see you soon !"
  );
}

const firstName = "Robin";
const age = 25;
// sayHi("Robin");
// sayBye("Robin");

sayHi(firstName, age);
sayBye(firstName, age);
