
const a = 13;
const b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log('소수점까지 계산: ' + (a / b));
console.log('몫만 계산: ' + parseInt(a / b));
console.log(a % b);
console.log(a % b);

console.log('#### 비교 ####');
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

const c = 10;
const d = 10;
const e = '10';

console.log('10 == \'10\'? ' + (c == e));
console.log('10 == \'10\'? ' + (c === e));
console.log('10 != \'10\'? ' + (c != e));
console.log('10 !== \'10\'? ' + (c !== e));

console.log('10 != \'13\'? ' + (c != '13'));
console.log('10 !== \'13\'? ' + (c !== '13'));

console.log(100 / '60');
console.log(100 / '100');