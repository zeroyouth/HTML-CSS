// 파라미터의 값이 정해지지 않았다. 즉 변경한 가변 파라미터로 사용할 수 있다.
// ...a는 spread 문법임. 
function sum(...a) {
    let result = 0;
    for (let i = 0; i < a.length; ++i) {
        result += a[i]; //배열로 a변수에 전달됨!
    }
    return result;
}

console.log(sum(1,2,3,4));
console.log(sum(4));
console.log(sum());