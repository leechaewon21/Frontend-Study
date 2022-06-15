import React from "react"
import {TodoInput} from "./TodoInput"
import {TodoList} from "./TodoList"

export class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [], //{id: TODO-0, text:투두리스트 만들깅}
            index: 0
        }
    }

    //첫 렌더링
    componentDidMount() {
        const storedTodos = localStorage.getItem("todos");
        const storedIndex = localStorage.getItem("index");

        if(storedTodos && storedIndex) {
            this.setState({
                todos: JSON.parse(storedTodos),
                index: JSON.parse(storedIndex)
            })
        }
    }

    //투두 추가
    addTodo() {
        const inputText = document.getElementById("inputText");

        if(inputText.value) {
            const temp = this.state.todos;
            temp.push({
                id: "TODO-"+this.state.index,
                text: inputText.value
            });

            this.setState({
                index: this.state.index+1,
                todos: temp
            }, () => {
                console.log(todos);
                localStorage.setItem("todos", JSON.stringify(this.state.todos));
                localStorage.setItem("index", JSON.stringify(this.state.index));
            });

            inputText.value="";
        }
    }

    // 투두 체크
    checkTodo(todoID) {
        const selectedTodo = document.querySelector("#"+todoID);
        const selectedBtn = document.querySelector("#"+todoID+" #checkTodoButton");

        if(selectedTodo.style.color == "black") {
            selectedTodo.style.color = "grey";
            selectedBtn.value = "❎";
        } else {
            selectedTodo.style.color = "black";
            selectedBtn.value = "✅";
        }
    }

    //투두 삭제
    deleteTodo(todoID) {
        const temp = this.state.todos;
        temp.filter((todo)=>
            todo.id!==todoID
        )
        this.setState({
            todos: temp
        },()=>{
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        });
    }

    clearTodo() {
        localStorage.removeItem("todos");
        localStorage.removeItem("index");
    }

    render() {
        return (
            <div>
                <TodoInput addTodo={()=>this.addTodo()}/>
                <TodoList
                    todos={this.state.todos}
                    checkTodo={(todoID)=>this.checkTodo(todoID)}
                    deleteTodo={(todoID)=>this.deleteTodo(todoID)}
                />
            </div>
        );
    }
}