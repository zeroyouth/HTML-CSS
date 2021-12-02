// 재귀함수
/*1. 종료조건을 체크 
  2. 반복문으로 구현할 수 있는 것은 재귀함수로 구현가능 */
function factorial(n){
    if(n<=1) {
        return n
    }
    return n * factorial(n-1)//자신을 다시 불러온다.
}
console.log(factorial(5));
// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1