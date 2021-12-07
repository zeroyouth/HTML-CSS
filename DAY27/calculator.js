const calculator = {
    add : function(a,b) {
        console.log(a+b);
    },
    min : function(a,b) {
        console.log(a-b);
    },
    mul : function(a,b) {
        console.log(a*b);
    },
    div : function(a,b) {
        console.log(a/b);
    },
    power : function(a) {
        console.log(a**2);
    }   
}

calculator.add(2,4);
calculator.min(6,2);
calculator.mul(3,3);
calculator.div(6,3);
calculator.power(4);