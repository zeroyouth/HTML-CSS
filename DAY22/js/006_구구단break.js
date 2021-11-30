// break : 나를 감싸고 있는 반복문만 탈출한다. 
let i= 2;
let j= 1;

while (i<10) {
    while(j<10){
        console.log(`${i} x ${j} = ${i*j}`);
        if (j==5){
            break;
        }
        j++;
    }
    i++;
    j=1;
}