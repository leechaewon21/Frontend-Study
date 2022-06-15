import React from "react";

export class TodoOne extends React.Component {
    render() {
        return(
            <li id={this.props.id} style={{color: "black"}}>
                <input id="checkTodoBtn" type="button" value="✅" onClick={this.props.checkTodo(this.props.id)}></input>
                <input id="deleteTodoBtn" type="button" value="❌" onClick={this.props.deleteTodo(this.props.id)}></input>
                {this.props.text}
            </li>  
        );
    }
}