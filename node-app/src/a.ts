const x: number = 1;
console.log(x);

function greet(firstname: string) {
  console.log("hello" + firstname);
}

greet("777");

function runAfter1s(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfter1s(function () {
  console.log("hi jay!");
});

function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(2, 3));
