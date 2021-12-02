function fib(n){
    if(n<=2){
        return n;
    }
    return fib(n-1)+fib(n-2)
}

// fib(4) == fib(3) + fib(2) == 3 + 2 = 5
// fib(3) == fib(2) + 1 == 3
// fib(2) == 2
// fib(1) == 1

// 오른쪽 값인 fib(2)를 다시 해야하는 상황!!
// fib(2) == 2