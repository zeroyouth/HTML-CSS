array = [10,20,30,40,50];

let result = 0;
for (let value of array) {
    result += value;
}
console.log(result/(array.length));
