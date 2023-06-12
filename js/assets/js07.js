const gugudanDiv = document.getElementById('gugudan');

for(i = 2; i < 10; i++) {
    gugudanDiv.innerHTML += '<div class = "dan">' + i + '단' + '</div>';
    for(j = 1; j < 10; j++) {
        //Javascript format string
        gugudanDiv.innerHTML += `<div class="value">${i} X ${j} = ${i*j}</div>`;
    }
}