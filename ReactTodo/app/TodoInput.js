import React from "react";

export class TodoInput extends React.Component {
    render() {
        return(
            <div>
                <input id="inputText" type="text" placeholder="Write Your ToDo"></input>
                <input type="button" value="✍" onClick={()=>this.props.addTodo()}></input>
            </div>
        );
    }
}