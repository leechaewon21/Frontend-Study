import React from "react";
import {TodoOne} from "./TodoOne"

export class TodoList extends React.Component {
    render() {
        const todoList = (this.props.todos).map((todo) => 
            <TodoOne
                key={todo.id.toString()}
                id={todo.id}
                text={todo.text}
                checkTodo={this.props.checkTodo}
                deleteTodo={this.props.deleteTodo}
            />
        );

        return (
            <div>
                <ul>
                    {todoList}
                </ul>
            </div>
        );
    }
}