//시그마 : 수열의합
function sigma(n) {
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1) 
}
console.log(sigma(5));
// sigma(5) == 5 + sigma(4) == 5+10
// sigma(4) == 4 + sigma(3) == 4+6
// sigma(3) == 3 + sigma(2) == 3+3
// sigma(2) == 2 + sigma(1) == 2+1
// sigma(1) == 1