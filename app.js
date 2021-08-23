let btn = document.getElementById('btn');
let inputField = document.getElementById('input');
let displayTodo = document.getElementById('addToDo');

btn.addEventListener('click', function(){
    let addUp = document.createElement('p');
    addUp.classList.add('displayCons');
    addUp.innerText = inputField.value;
    displayTodo.appendChild(addUp);
    displayTodo.addEventListener('click', function(){
        displayTodo.style.textDecoration = "line-through";
    })
    addUp.addEventListener('dblclick', function(){
        displayTodo.removeChild(addUp);
    })

})