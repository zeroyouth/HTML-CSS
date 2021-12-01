let a = [3];
console.log("최초의 크기 : " + a.length);

a[5] = 456; //0,1,2,3,4,5 => 배열의 크기가 자동으로 6이됨.
console.log("새 크기 : " + a.length);
for (let i = 0; i < a.length; ++i) {
    console.log("a[%d] : %s", i, a[i]);
}