outer: for (let i = 0; i < 3; i++) { // 0, 1, 2

    for (let j = 0; j < 3; j++) { //0, 1, 2

        let input = prompt(`(${i},${j})의 값`, '');

      // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
        /* 총 9번 물어봄 
        (0,0)(0,1)(0,2)
        (1,0)(1,1)(1,2)
        (2,0)(2,1)(2,2) */
        if (!input) break outer; // (*)

      // 입력받은 값을 가지고 무언가를 함
        }
    }
alert('완료!');