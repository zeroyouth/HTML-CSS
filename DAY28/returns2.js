const calculator = {
    add : function(a,b) {
        return a+b;
    },
    min : function(a,b) {
        return a-b;
    },
    mul : function(a,b) {
        return a*b;
    },
    div : function(a,b) {
        return a/b;
    },
    power : function(a) {
        return a**2;
    }   
}

const plusResult = calculator.add(2,4);
const minusReslut = calculator.min(plusResult,2);
const timeResult = calculator.mul(3,minusReslut);
