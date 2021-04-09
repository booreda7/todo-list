//selectors
const todoInput = document.querySelector('.todoinput');
const addButton = document.querySelector('.add');
const todoList = document.querySelector('.todolist');
//event listeners
addButton.addEventListener('click', onAdd)
todoList.addEventListener('click', onAction)

//functions

function onAdd(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add('todoitem');
    todoDiv.appendChild(newTodo);
    //create buttons
    const successBtn = document.createElement('button');
    successBtn.classList.add('successbtn');
    successBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(successBtn);


    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deletebtn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteBtn);
    //adding div to ul
    todoList.appendChild(todoDiv)



    todoList.appendChild(todoDiv);
    todoInput.value = ''
}

function onAction(e){
    const item = e.target; 
    if(item.classList[0] === 'deletebtn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){todo.remove()});
        
    }
    if(item.classList[0] === 'successbtn'){
        const item = e.target;
        const todo = item.parentElement;
        todo.classList.toggle('completed') 
    }
}