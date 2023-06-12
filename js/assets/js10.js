const snacks = ['초코파이', '초코하임', '화이트초코하임', '마가렛뜨', '치토스', '프링글스', '가나초콜렛',
    '양파링', '바나나킥', '오감자']

console.log(snacks);

// join(sep) : sep으로 이어붙인다
console.log(snacks.join("/"));

//push(item) : 배열의 맨 뒤에 원하는 값을 추가한다, 추가한 뒤에 길이를 반환한다
console.log(snacks.push('포스틱'));
console.log(snacks.push('에이스'));

console.log(snacks, snacks.length);

// pop() : 맨 뒤의 값을 꺼내면서 삭제
let item = snacks.pop();

console.log('방금 꺼낸 아이템 : ', item);
console.log(snacks);

// shift() : 맨 앞의 값을 꺼내면서 삭제
item = snacks.shift();
console.log('방금 꺼낸 아이템(shift): ', item);
console.log(snacks);

// unshift(item) : 맨 앞에 값을 추가
let len = snacks.unshift('이클립스');
console.log(snacks, len);

//reserse() : 현재 배열을 거꾸로 뒤집는다
snacks.reverse();
console.log(snacks);

// sort() : 정렬한다. 정렬의 기준을 직접 정의할 수도 있다.
snacks.sort();
console.log(snacks);

const scores = [100, 55, 5899, 1557, 1234, 9999, 1, - 50, -8000];

//sort(comparator) : 정렬의 기준을 직접 설정한다.
snacks.sort(function myComparator(a,b) {
    // 오른쪽의 값이 뒤에 오고 싶다면 양수를 리턴
    // 왼쪽의 값이 뒤에 오고 싶다면 음수를 리턴
    // 두 값이 같으면 0을 리턴
    return b.localeCompare(a); // String.compare() 같은 느낌의 메서드
});
console.log(snacks);

let i = 0;
scores.sort(function myComparator(a,b) {
    console.log(`[${i++}]: ${a} vs ${b}의 결과: ${b-a},
    ${b - a > 0 ? '자리를 바꾼다' : '자리를 바꾸지 않는다'}`);
    return b - a;
});
console.log(scores);

// a.localCompare(b) : 문자열들의 사전상 순서 비교
console.log('air'.localeCompare('airplane'));

/*
    # 연습 
    
    1. 배열에 랜덤으로 1 ~ 45 사이의 숫자를 1000개 추가한다
        hint. Math.random()을 사용

    2. 각 숫자들이 나온 횟수를 센다

    3. 가장 많이 나온 숫자 6개를 HTML에 출력해준다
*/

const ranNums = [];
const numCnts = [];


for(i = 0; i < 1000; ++i) {
    ranNums.push(parseInt(Math.random() * 45 + 1));
}

for(i = 0; i < 45; ++i) {
    numCnts[i] = {
        cnt : 0,
        num: i + 1
    }
}

for(i = 0; i < 1000; i++) {
    numCnts[ranNums[i] -1]['cnt'] += 1;
}

numCnts.sort(function(a, b) {
    return b.cnt - a.cnt;
});

for(i = 0; i < 6; i++) {
    console.log(`${i + 1}번째로 많이 나온 숫자(${numCnts[i].cnt}회)` + `${numCnts[i].num}`)
}
