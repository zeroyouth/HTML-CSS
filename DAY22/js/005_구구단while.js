// for문은 조건문에 초기화 구문이 같이 있지만 while은 그렇지 않기 때문에 j가 2단을 한번 돌고 나면 while문을 벗어나게 된다. 그래서 while문 밖에 j를 초기화 시켜주는 구문을 추가해서 해결할 수 있다. 
let i= 2;
let j= 1;

while (i<10) {
    while(j<10){
        console.log(`${i} x ${j} = ${i*j}`);
        j++;
    }
    i++;
    j=1;
}