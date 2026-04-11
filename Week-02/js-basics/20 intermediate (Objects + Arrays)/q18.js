let inp = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
]

inp.sort((a,b) => a.name.localeCompare(b.name)|| a.age - b.age);

console.log(inp);



