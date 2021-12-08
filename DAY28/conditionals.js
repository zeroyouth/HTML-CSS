/* if, else if문과 and && or || 연산자
- 조건문이 true일때만 실행시킨다.
- else는 선택사항임. 
- and는 둘다 참이어야 참, false는 하나만 참이여도 참 둘다 false여야 false
- else if는 양자택일이고 자바스크립트는 위에서 아래로 읽음, 위와 중첩되는 지 잘 확인할것 */

const age = parseInt(prompt("how old are you?"));

// console.log(isNaN(age));

if(isNaN(age) || age < 0){ //둘 중에 하나라도 true면 실행된다.
    console.log("please write a real positive number")
}else if(age<18){
    console.log("thank you for writing your age. but you are too young");
    
} else if(age >= 18 && age <=50){
    console.log("you can drink");
} else if(age > 50 && age <= 80){
    console.log("you should exercise");
} else if(age > 80 && age <= 99){
    console.log("건강을 위해 술을 줄이세요.");
} else {
    console.log("you can do whatever you want.")
}
