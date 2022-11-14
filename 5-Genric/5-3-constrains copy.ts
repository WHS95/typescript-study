const obj1 = {
  name: "alex",
  age: 25,
};

const obj2 = {
  animal: "dog",
};

console.log(getValue1(obj1, "age"));
console.log(getValue2(obj1, "age", "name"));

function getValue1<T, K extends keyof T>(obj: T, key1: K): T[K] {
  return obj[key1];
}
function getValue2<T, K extends keyof T>(
  obj: T,
  key1: K,
  key2: K
): [T[K], T[K]] {
  return [obj[key1], obj[key2]];
}
