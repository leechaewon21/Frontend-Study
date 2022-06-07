import React from "react";
import ReactDom from "react-dom"

var root = document.getElementById("root");

function Test() {
    return(
        <div>
            <h1>TEST - CRA 없이 React App 만들기</h1>
            <p>by Chaewon</p>
        </div>
    )
}

ReactDom.render(<Test/>,root);