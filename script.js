const ul = document.getElementsByClassName('toDo-list')[0];//берём псевдомассив классов выбраных, и из него первый по счету
const [addBtn] = document.getElementsByClassName('add-btn');
// obj.prop = fn(arg)
// addBtn.onclick = addTask(document.getElementById('taskInput').value)

addBtn.onclick = () => {
    addTask(input.value);
    input.value = "";
} 


function addTask(text){
    const li = document.createElement('li');//
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    
    li.append(checkbox, span) //собрали желементы вместе
    checkbox.type = 'checkbox'; //добавляем тип input
    span.innerText = text;
    ul.append(li)
}

