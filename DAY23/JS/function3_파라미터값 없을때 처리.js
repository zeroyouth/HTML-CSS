// 파라미터 값이 전달되지 않았을 경우 처리하기!

//1번
function add(a,b) {
    if (b == undefined) b = 0; 
    return a+b;
}

console.log(add(3,4));
console.log(add(3)); // b값이 undefined니까 3+0해서 3값이 나옴

//2번
function add(a,b){
    if  (!b) b = 0; // undefined는 false가 된다. !b 일때 true 가 되면서 조건문 실행됨! 
    return a+b;
}

console.log(add(3)); //따라서 3+0 = 3이 출력된다. 

//3번
function add(a,b) {
    return a+ (b||0); //b가 true면 b나오고 false면 0이 나온다.
}
console.log(add(3,4));
console.log(add(3));
