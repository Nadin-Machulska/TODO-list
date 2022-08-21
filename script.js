const input = document.getElementById('taskInput');
const ul = document.getElementsByClassName('toDo-list')[0];//берём псевдомассив классов выбраных, и из него первый по счету
const [addBtn] = document.getElementsByClassName('add-btn');
// obj.prop = fn(arg)
// addBtn.onclick = addTask(document.getElementById('taskInput').value)

addBtn.onclick = () => {
    if (!input.value) return //guard clause защитная кляуза

    addTask(input.value);
    input.value = "";

};
//addBtn.addEventListener('click', () => addTask(document.getElementById('')))

input.onkeydown = (e) => {
    if (!(e.key == 'Enter')) return;

    addTask(input.value);
    input.value = "";

}



function addTask(text) {
    const li = document.createElement('li');//
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    li.append(checkbox, span) //собрали елементы вместе
    checkbox.type = 'checkbox'; //добавляем тип input
    span.innerText = text;
    ul.append(li);

    checkbox.onchange = (e) => {
        // if (checkbox.checked) {
        //     // strikeTask(span);
        //     span.style.textDecoration = 'Line-through';
        //     span.style.textDecorationColor = 'red';
        // } else {
        //     span.style.textDecoration = null;
        // }
        span.style.textDecoration = (checkbox.checked ? 'Line-through' : null) //тернарный if

    }
}

function strikeTask(element) {
    // const span = element.lastChild;

    element.style.textDecoration = 'line-through';
    span.style.textDecorationColor = 'red';

}