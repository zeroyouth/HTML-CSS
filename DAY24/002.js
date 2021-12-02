let v = 100;

function test(a) {
    a = 1000;
    console.log('난 v야', v);
    console.log('난 a야', a);
}

test(v);
v;