//destructing assignment
let a = [3,4,5];
let [e1,e2,e3] = a; //구조분해할당을 이용해서 배열을 분해하고 할당한다. 
console.log("%d %d %d", e1,e2,e3);

[e1,e2] = a;
console.log("%d %d", e1,e2);

let b = [3,4,5,6,7,8];
let [a1,a2, ...a3] = b;
console.log(a3); //배열로 저장이 된다. 