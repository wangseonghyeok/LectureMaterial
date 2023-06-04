function func(params) {
  console.log('name function');
}
function func2(params) {
  console.log('name function');
}
const name2 = function (params) {
  console.log('name2 function');
  return func2;
};
const obj = {
  a: 1,
  name2: name2,
};

obj.name2();

const b = new Number(10);
console.log(b);
console.log(b.toString());

debugger;

const a = 10; // ==> Number Object
console.log(a);
console.log(a.toString());
