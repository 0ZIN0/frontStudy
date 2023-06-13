const out = document.querySelector('#out');

let itemNum = 1;
let prevNum = 1;
const pushItem = () => {
    // (1) 새 element node를 생성
    const newDiv = document.createElement('div');
    // (2) 새 text node를 생성
    const newText = document.createTextNode('item' + itemNum++);

    // (3) element node에 text node를 붙인다
    newDiv.appendChild(newText);

    // (4) 새 element node를 out에 추가한다
    out.appendChild(newDiv);

    newDiv.className('.push');
    // 자식 노드의 개수를 알 수 있다
    console.log(out.childElementCount);
}

// Arrow Function 방식으로 선언한 함수는 변수 선언 시점에 뒤늦게 생성되기 때문에
// 코드 윗부분에서 사용할 수 없다
const popItem = () => {
    if(out.childElementCount == 0) {
        alert('더 이상 지울 수 없습니다');
        return;
    }
    const lastDiv = document.querySelector('#out > :last-child');
    itemNum--;
    out.removeChild(lastDiv);
}

const shiftItem = () => {
    if(out.childElementCount == 0) {
        alert('더 이상 지울 수 없습니다');
        return;
    }
    const firstDiv = document.querySelector('#out > :first-child');
    out.removeChild(firstDiv);
};

const unshiftItem = () => {
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('item' + itemNum++);
    newDiv.appendChild(newText);
    newDiv.className('.unshift');
    out.prepend(newDiv);
    
    console.log(out.childElementCount);
};