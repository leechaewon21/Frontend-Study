import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <ul>{this.props.todos}</ul>
        );
    }
}

class TodoOne extends React.Component {

    checkTodo() {
        const selectedTodo = document.querySelector("#"+this.props.id);
        const selectedBtn = document.querySelector("#"+this.props.id+" input");

        if(selectedTodo.style.color == "black") {
            selectedTodo.style.color = "grey";
            selectedBtn.value = "❎";
        } else {
            selectedTodo.style.color = "black";
            selectedBtn.value = "✅";
        }
    }

    render() {
        return(
            <li id={this.props.id} style={{color: "black"}}>
                <input type="button" value="✅" onClick={()=>{this.checkTodo()}}></input>
                <input type="button" value="❌" onClick={()=>{this.props.delete(this.props.id)}}></input>
                {this.props.text}
            </li>  
        );
    }
}

export class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoNum: 0,
            todos: []
        };
    }

    deleteTodo(todoID) {
        const selected = document.querySelector('#'+todoID);
        selected.remove();
    }

    addTodo() {
        const inputText = document.getElementById("inputText");
        if(inputText.value) {
            const temp = this.state.todos;
            temp.push(<TodoOne
                id={"todo-"+temp.length}
                text={inputText.value}
                delete={(todoID)=>this.deleteTodo(todoID)}/>);
            this.setState({
                todoNum: temp.length,
                todos: temp
            });
            inputText.value="";
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input id="inputText" type="text" placeholder="Write Your ToDo"></input>
                    <input type="button" value="✍" onClick={()=>this.addTodo()}></input>
                </div>
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}