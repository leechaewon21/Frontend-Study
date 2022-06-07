import React from "react"
import {createRoot} from "react-dom/client"
import {App} from "./App"

const container = document.getElementById("container");
const root = createRoot(container); 

function Test() {
    return(
        <div>
            <h1>TEST - To Do List React App</h1>
        </div>
    );
}

root.render(<App/>);