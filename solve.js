function solve(eq) {
  return eq
    .split(/([+*\/-])/)
    .reverse()
    .join("");
}

let str = "100*b/y";

console.log(solve(str));
