function sayHello(name, age) { //()괄호 두개가 function을 실행하는 방법이다.
    console.log(`Hello! my name is ${name} and I'm ${age} years old`);
}
sayHello("영은", 24);
sayHello("은영", 23);
sayHello("윤지", 24);

const player = {
    name : "youngeun",
    helloMyName : function (otherPersonName) {
        console.log(`hello my name is ${otherPersonName}, nice to meet you!`)
    }
}

player.helloMyName("jennifer");