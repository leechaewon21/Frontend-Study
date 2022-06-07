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
        const checkedTodo = document.querySelector("#"+this.props.id);
        const checkedBtn = document.querySelector("#"+this.props.id+" input");

        if(checkedTodo.style.color == "black") {
            checkedTodo.style.color = "grey";
            checkedBtn.value = "❎";
        } else {
            checkedTodo.style.color = "black";
            checkedBtn.value = "✅";
        }
    }

    render() {
        return(
            <li id={this.props.id} style={{color: "black"}}>
                <input type="button" value="✅" onClick={()=>{this.checkTodo()}}></input>
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

    addTodo() {
        const inputText = document.getElementById("inputText");
        if(inputText.value) {
            const temp = this.state.todos;
            temp.push(<TodoOne
                id={"todo-"+temp.length}
                text={inputText.value}/>);
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