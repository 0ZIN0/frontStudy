const numbers = [];

for(i = 0; i < 10; i++) {
    numbers[i] = i * 10;
}

console.log(numbers);
/*
    # 배열.forEach() : 배열의 모든 값으로 전달한 함수를 실행한다
*/
function func1(num) {
    console.log(num * 3 + '입니다');
}

// 해당 배열의 값을 하나씩 꺼내면서 반복문을 돌리는 것과 비슷하다
numbers.forEach(func1);
numbers.forEach(function func2(num) {
    console.log('func2입니다...' + num);
});
// function 키워드 대신 => 화살표를 사용해 함수를 정의할 수도 있다(Arrow Function)
numbers.forEach((num) => {
    console.log('func3입니다...' + (num - 1));
});

/*
    # 배열.map() : map에 전달한 함수의 리턴값들로 구성된 새로운 배열을 리턴한다
                    (foreach()는 리턴이 없었고, map()은 리턴이 있다)
*/
const result = numbers.map((num) => {
    return num + 5;
});
// 만약 Arrow Function에 한 줄 들어가는 명령어 return이라면 {}를 생략할 수 있다
const result2 = numbers.map(num => num * 3);

console.log(result);
console.log(result2);

// 연습1: 0 ~ 100점의 점수를 가진 scores배열을 생성하고
//      해당 배열을 사용해 grades 배열을 만들어보세요

const scores = [45, 34, 67, 89, 92, 2000];


const grades = scores.map((num) => {

    var grade;

    if(100 < num) {
        grade = 'F';
    } else if(100 >= num && 90 <= num) {
        grade = 'A';
    } else if (num >= 80) {
        grade = 'B';
    } else if (num >= 70) {
        grade = 'C';
    } else if (num >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // 숫자 배열을 받았다고 해서 숫자만 리턴해야 하는 것은 아니다
    return{scores: scores, grade: grade};
});

console.log(grades);

/*
    # 배열.filter() : 전달한 함수에 각 값을 넣어서 true를 리턴한 값만 남기는 함수
                    (전달하는 함수는 반드시 boolean 타입 값을 리턴해야 한다)
*/
console.log(typeof true);

const snacks = ['초코파이', '초코하임', '화이트하임', '초코퍼지', '마가렛뜨'];

const chocos = snacks.filter((snack) => {
    return snack.includes('초코');
});

console.log(chocos);

/*
    # 배열.reduce() : 배열의 모든 값을 이용해 하나의 결과를 만들어내는 함수
*/
const total = numbers.reduce((prev, curr) => {
    console.log(`${prev} + ${curr} : return ${prev + curr}`);
    return prev + curr;
});

console.log(total);

// reduce를 이용해 가장 작은 수를 구하는 경우
const min = numbers.reduce((prev, curr) => {
    console.log(`${prev} < ${curr} ? return ${prev < curr ? prev : curr}`);
    return prev < curr ? prev : curr;
});
console.log(min);
// reduce를 이용해 가장 큰 수를 구하는 경우
const max = numbers.reduce((prev, curr) => {
    console.log(`${prev} < ${curr} ? return ${prev < curr ? curr : prev}`);
    return prev < curr ? curr : prev;
});
console.log(max);

/*
    (1) 학번, 이름, 국/영/수 랜덤 점수를 가진
        학생 100명의 자바스크립트 오브젝트 배열을 생성

    (2) 각 학생들의 오브젝트에 평균 점수를 추가

    (3) 수학 점수가 60점 미만인 학생들로 이루어진 배열을 생성

    (4) 모든 학생들의 평균 영어 점수

    (5) 위의 모든 내용으로 웹 페이지를 보기좋게 구성할 것
*/

students = [];

// 리턴만 하는 한 줄 짜리 함수는 이렇게 정의할 수 있다
const getRandomScore = () => parseInt(Math.random() * 100 + 1);

for(i = 0; i < 100; i++) {
    students[i] = {
        stuNum : i + 1,
        name : '학생' + (i + 1),
        kor : getRandomScore(),
        eng : getRandomScore(),
        math : getRandomScore(),
    }
}

students.forEach((stu) => {
    stu.avg = (stu.kor + stu.eng + stu.math) / 3;
}); 

const underSixty = students.filter((student) => {
    return student.math < 60;
});

// (4) 모든 학생들의 평균 영어 점수
const engAvg = students.map((stu) => stu.eng)
    .reduce((prev, curr) => prev + curr) / students.length;

// reduce(callback(curr, prev), initalValue) : reduce의 다른 오버로딩 사용
const engAvg2 = students.reduce((tot, curr) => {
    return tot + curr.eng;
}, 0) / students.length;


const stuDiv = document.getElementById('st');
stuDiv.style.width = '350px';
for(i = 0; i < students.length; i++) {
    var st = students[i];
    stuDiv.innerHTML +=
        '<tr><td>' + st.stuNum + '</td>' +
        '<td>' + st.name + '</td>' +
        '<td>' + st.kor + '</td>' +
        '<td>' + st.eng + '</td>' +
        '<td>' + st.math + '</td>' +
        '<td>' + st.avg.toFixed(2) + '</td></tr>';
}

const underDiv = document.getElementById('underSixty');
underDiv.style.width = '350px';
underDiv.style.height = '150px';
for(i = 0; i < underSixty.length; i++) {
    var ud = underSixty[i];
    underDiv.innerHTML +=
        '<tr><td>' + ud.stuNum + '</td>' +
        '<td>' + ud.name + '</td>' +
        '<td>' + ud.kor + '</td>' +
        '<td>' + ud.eng + '</td>' +
        '<td>' + ud.math + '</td>' +
        '<td>' + ud.avg.toFixed(2) + '</td></tr>';
}

const grid = document.getElementById('grid');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(3, 350px)';
grid.style.columnGap = '100px';
grid.style.margin = '50px';

const engAvgDiv = document.getElementById('engAvg');
engAvgDiv.innerHTML += `<h3>${engAvg}점</h3>`;
engAvgDiv.style.position = 'sticky';
engAvgDiv.style.top = '10px';
engAvgDiv.style.left = '600px';
engAvgDiv.style.width = '400px';
engAvgDiv.style.height = '300px';
engAvgDiv.style.color = 'orangered';
