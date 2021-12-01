let a = [11, 22, 33, 111, 2];
let s = [11, 22, 33, 111, 2].join('');
console.log(s);
let sum = 0;
for (var variable in s) {
  console.log(parseInt(s[variable], 10));
  sum += parseInt(s[variable], 10);
}
console.log(sum);