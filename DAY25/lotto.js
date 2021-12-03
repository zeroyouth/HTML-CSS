let lotto = [];
for(let i=0;i<6;i++){
    /*- Math.random() : 0~1사이의 랜덤한 실수를 반환하는 메서드입니다.
                        ,실수를 반환하기 때문에 정수로 반드시 처리해야합니다.
        Math.floor() : 실수를 내림하여 정수를 만드는 메서드입니다.*/
        let num = Math.floor(Math.random() *44)+1; //1부터 45까지의 수
        for(let j in lotto){
            if(num == lotto[j]){ //현재 나온숫자가 기존의 로또 숫자와 같다면
                num = Math.floor(Math.random()*44)+1; //다시 뽑기
            }
        }
        lotto.push(num); //push : 배열 마지막에 값추가 
}
// 오름차순 숫자 정렬
lotto.sort((a,b)=>a-b);

console.log('이번주 로또 번호 : ' + lotto);
//문서에 출력
document.write('이번주 로또 번호 : ' + lotto);
