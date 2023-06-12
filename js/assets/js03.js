var a = 10;
var a = 15;

console.log(a);

// 같은 이름의 변수 선언을 막아준다
let b = 10;
b = 20;
console.log(b);

// 처음 설정한 값을 변경할 수 없는 변수 선언 (final)
const c = 10;
// c = 15;
console.log(c);
console.log(b+c);