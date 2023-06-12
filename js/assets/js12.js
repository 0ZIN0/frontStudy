
const phrases = ['Good bye', 'Hello', 'Nice to meet you', 'Greetings'];

function clickProcess(element) {
    element.innerHTML = phrases[parseInt(Math.random() * phrases.length)];
}

// querySelector('CSS Selector') : CSS 선택자로 요소를 선택할 수 있다 (#id)
// querySelectorAll('CSS Selector') : CSS 선택자로 요소들을 선택할 수 있다(class ...)
const div2 = document.querySelector('#Welcome2');
const darkmode = document.querySelector('#darkmode');

// addEventListener('event', callback) : 해당 요소에 이벤트를 추가한다
div2.addEventListener('click', (e) => {
   // console.log(e); // 발생한 이벤트에 대한 모든 정보를 볼 수 있다
});

// 자바스크립트로 해당 HTML요소 속성에 직접 접근하여 추가하기
div2.onmouseover = (e) => {
    div2.style.backgroundColor = 'orange';
}

div2.addEventListener('mouseleave', (e) => {
    div2.style.backgroundColor = 'blue';
});

darkmode.addEventListener('change', (e) => {
    // input 태그의 상태가 변할 때마다 event 정보에서 체크 여부를 파악할 수 있다
    if(e.target.checked === true) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        // console.log('다크모드가 활성화 되었습니다');
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        // console.log('다크모드가 해제 되었습니다')
    }
});