//unshift 메소드는 배열의 앞쪽에 항목을 추가한다. 
//push와 추가 순서만 다르고 기능같음! 

let a = [];
for (let i =0; i<=5; ++i){
    a.unshift(i);
    console.log(a);
    console.log(a.length);
}