const array_num = [0, 1, 2, 3, 4, 5];

const new_array = array_num.map((array_item) =>{ 
	return array_item * 2;
});
// 새 배열의 값은 원본 배열 원소에 +1 한 값입니다.
console.log(new_array);
// 원본 배열은 그대로 있죠!
console.log(array_num);