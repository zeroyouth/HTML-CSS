let array = [10, 20, 30, 10, 20, 30, 40, 10];
let po = 0;
let result = 21.25;
for (let i of array) {
    po += (i - result) ** 2;
    
}console.log(po/(array.length));