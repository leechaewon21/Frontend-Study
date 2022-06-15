const todoForm = document.querySelector("#todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todolist");
let todos = [];

function handleTodoSubmit(event) {
    event.preventDefault();

    const newTodoObj = {
        text: todoInput.value,
        id: Date.now()
    };
    todoInput.value="";
    
    paintTodo(newTodoObj);
    todos.push(newTodoObj);
    saveTodos();
}

function paintTodo(obj) {
    const li = document.createElement("li");
    const content = document.createElement("span");
    const deleteButton = document.createElement("button");

    li.id = obj.id;
    content.innerText = obj.text;
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click",deleteTodo);

    li.appendChild(content);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    
    todos=todos.filter((obj) => obj.id !== parseInt(li.id));
    saveTodos();
}

function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(todos)); 
    console.log("[Now Local Storage]"+localStorage.getItem("todos"));
}

function init() {
    todoForm.addEventListener("submit",handleTodoSubmit);

    const stringTodos = localStorage.getItem("todos");

    if(stringTodos !== null) {
        const parsedTodos = JSON.parse(stringTodos);
        todos = parsedTodos;
        parsedTodos.forEach(paintTodo);
    }
}

function deleteLocalStorage() {
    localStorage.removeItem("todos");
}

init();