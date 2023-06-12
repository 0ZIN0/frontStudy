
// parseInt() : 다양한 타입들의 값을 int로 변환
console.log(parseInt('1234'));

// 진법 문자열을 정수로 변환하는 방법
console.log(parseInt('1011000', 2));
console.log(parseInt('AB001D', 16));

console.log(parseInt(123.123));


// NaN : Not a Number
console.log(parseInt('Hello'));
console.log(typeof NaN); //NaN은 숫자가 아니라는 뜻의 숫자 타입 값이다


// parseFloat() : 다양한 타입의 값을 실수 타입으로 변환
console.log(parseFloat('123.12345'));

//Number() : 숫자 타입으로 변환
console.log(Number('1234'));
console.log(Number('1234.1234'));
console.log(Number(true));
console.log(Number(false));

// while(true) == while(1)
i = 1;
while(1) {
    console.log(i++);
    if(i == 100) {
        break;
    }
}

// Date를 Number()로 변환하면 Unix time이 된다
console.log(new Date());
console.log(Number(new Date()));

let num = 12345;

console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));