const out = document.getElementById('out');

// 타임아웃을 삭제하고 싶으면 생성시에 인스턴스를 받아놓아야 한다
const initDiv = setTimeout(() => {
    out.appendChild(document.createElement('div'));
}, 1500)

// 타임아웃 삭제
// window.clearTimeout();

const moveDiv = window.setInterval(() => {
    const box = document.querySelector('#out > :first-child');
    if(box == null) {
        return;
    }
    console.log(box);
    box.style.left = parseInt(Math.random() * (out.clientWidth - 99)) + 'px';
    box.style.top = parseInt(Math.random() * 401) + 'px';
}, 1000);

// window.setTimeout(() => {
//     // 인터벌 삭제
//     window.clearInterval(moveDiv);
// }, 2000)