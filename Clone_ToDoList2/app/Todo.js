import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <ul>{this.props.todos}</ul>
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
            const temp = [this.state.todos];
            temp.push(<li>{inputText.value}</li>);
            this.setState({
                todoNum : temp.length,
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