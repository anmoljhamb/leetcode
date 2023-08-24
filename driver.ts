import solution from "./076_min_window";

let input1: string;
let input2: string;
let output: string;

input1 = "ADOBECODEBANC";
input2 = "ABC";
output = solution(input1, input2);

console.log(`input1: ${input1}, input2: ${input2}`);
console.log(output);

input1 = "ab";
input2 = "A";
output = solution(input1, input2);

console.log(`input1: ${input1}, input2: ${input2}`);
console.log(output);

input1 = "a";
input2 = "aa";
output = solution(input1, input2);

console.log(`input1: ${input1}, input2: ${input2}`);
console.log(output);
