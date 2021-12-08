// getElementById라는 함수를 통해 id로 element를 가져올 수 있다!
//document는 html을 의미함.
const title = document.getElementById("something"); 
//에러가 뜨게 됨.html에 id값을 없앴음. Uncaught TypeError: Cannot set properties of null (setting 'innerText') -> 타이틀이 존재하지 않으니 title내부의 innerText호출 하지마라! 

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

