// pop 메소드는, 배열의 끝의 항목을 배열에서 제거한다. 배열 크기는 1 감소함.
let a = [1,3,5,7];

while (a.length > 0) {
    let value = a.pop();
    console.log("pop된 값 = %d, array=[%s], 배열의 크기 = %d", value, a.toString(), a.length);
}