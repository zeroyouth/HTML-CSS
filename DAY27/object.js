const player = {
    name : "youngeun",
    score : 100,
    fat : false,
};
console.log(player); // console은 object라는 뜻이고, 그 안에 어딘가에 log가 있다는 것 
console.log(player["name"]); //아래와 같음
console.log(player.name); //player이라는 객체가 있고,  그 안에 name이 있는것처럼.

//object 안의 값을 변경할 수 있다.!
player.fat = true;
console.log(player); //{name: 'youngeun', score: 100, fat: true} 

//object 안의 값을 추가할 수 있다!
player.lastName = "choi";
console.log(player); //{name: 'youngeun', score: 100, fat: true, lastName: 'choi'}
player.score -= 10;
console.log(player.score);