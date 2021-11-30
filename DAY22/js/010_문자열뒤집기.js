let s = 'hello world';
// console.log(s[10]+s[9])
let temp = [];
for(let i = s.length -1; i >= 0; i--) {
    console.log(s[i]);
    temp += s[i]
}