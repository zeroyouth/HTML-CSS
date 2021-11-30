let s = "happy_birthday_sori";
//       012345678910
console.log(s.length);
console.log(s.slice(0,5));
console.log(s.slice(6,14));
console.log(s.slice(15,19));
//6번째부터 4개를 가져오겠다.
console.log(s.substr(6,4));
console.log(s.substring(6,11));
console.log(s.substring(6));
//replace
console.log(s.replace('sori','youngeun'));
//문자열 하나씩 출력하기 []
for (let i =0; i<s.length;++i)
    console.log(s[i]);
