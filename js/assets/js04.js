// document.getElementById() : id 속성으로 요소를 불러온다
const out = document.getElementById('out');

// HTML요소를 가져온 후에 마음대로 변경할 수 있다
sysout('Hello, world!');

// Javascript에서는 정수, 실수를 포함해 number타입이라고 부른다
let value = 10;
sysout('정수 10의 타입 : ' + typeof value);

value = 123.123;
sysout('123.123의 타입 : ' +typeof value);

// 문자열에는 '',""를 모두 사용할 수 있다
// 바깥에 ''를 썻다면 안쪽에서""를 사용할 수 있고
// 바깥에 ""를 썼다면 안쪽에서 ''를 사용할 수 있다

value = 'Hello!';
sysout('\'Hello\'의 타입: ' + typeof value);
value = "Hello!";
sysout('"Hello"의 타입: ' + typeof value);

value = [10, 11, 12, 13, 14];
sysout('[]의 타입: ' + (typeof value)); // 나오기는 Object라고 나온다
sysout('instanceof: ' + (value instanceof Array));

// Javascript Object (Java의 Map과 유사함)
value = {
    age: 20,
    name: '민수',
    kor: 90,
    eng: 100,
    getAvg: function() {
        return (this.kor + this.eng) / 2;
    }
};

sysout('{}의 타입: ' + typeof value);

// Javascript Object 값을 꺼내는 두 가지 방법
sysout(value['age']);
sysout(value.age);

// 함수 자체를 꺼내기
sysout(value.getAvg);

// 함수를 실행하기
sysout(value.getAvg());

// 함수도 변수에 넣을 수 있다
// 함수를 변수에 넣는 경우 해당 함수의 이름은 의미가 없기 때문에 생략이 가능하다
value = function myFunction() {
    console.log(12345);
};

sysout('함수의 타입: ' + typeof value);

// 변수 안에 들어있는 함수를 사용할 수 있다
value();

value = 123;
sysout(value);

// 자바스크립트 내에서도 해석 순위가 있는데, function 키워드가 붙으면 먼저 해석한다
function sysout(message) {
    out.innerHTML += '<div>' + message + '</div>';
}