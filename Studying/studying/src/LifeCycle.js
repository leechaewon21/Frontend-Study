import React from "react";

class Description extends React.Component {

    //Life Cycle Method 1
    constructor(props) {
        console.log("Description's constructor");
        super(props);

        this.state = {
            content: "not Props",
            BGcolor: 'skyblue',
        }
    }
    //Life Cycle Method 2
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");

        if(nextProps.content !== prevState.content) {
            console.log("It is not same -> change")
            return {content: nextProps.content}
        }
        return null
    }
    //Life Cycle Method 3
    shouldComponentUpdate(nextProps,nextState) {
        console.log("shouldComponentUpdate");
        return nextProps.content !== "Pressing Fake Button"
    }
    //Life Cycle Method 4
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("getSnapshotBeforeUpdate");
        if(prevState.BGcolor !== this.state.BGcolor) return this.contentRef.style.backgroundColor;
        return null;
    }
    //Life Cycle Method 5
    componentDidUpdate(prevProps,prevState,snapshot) {

        console.log("componentDidUpdate");

        if(snapshot != null) {
            console.log("Before Update  : ",snapshot);
        }
    }
    //Life Cycle Method 6
    componentDidMount(prevProps, prevState) {
        console.log("conponentDidMount");
    }
    //Life Cycle Method 7
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    //Life Cycle Method 8
    componentDidCatch(error,info) {
        console.log('componentDidCatch');
    }
    //Life Cycle Method 9
    render() {

        console.log("Description's render");

        return(
            <div>
                <h1
                    ref={(ref)=>{this.contentRef=ref}}
                    style={{backgroundColor: this.state.BGcolor}}
                    onClick={()=> {
                        if(this.state.BGcolor === 'pink') this.setState({BGcolor:'skyblue'});
                        else this.setState({BGcolor:'pink'});
                    }}
                >This is {this.state.content}</h1>
            </div>
        );
    }

}

export class LifeCycle extends React.Component{

    constructor(props) {
        console.log("LifeCycle's constructor");
        super(props);
        this.state = {
            content: "not Pressing Button"
        }
    }

    render() {

        console.log("LifeCycle's render");

        return(
            <div>
                <Description content={this.state.content}/>
                <button onClick={ () => {
                    console.log("[Real Button Clicked]");
                    this.setState({content: "Pressing Real Button"});
                 }}>Real Update</button>
                <button onClick={ () => {
                    console.log("[Fake Button Clicked]");
                    this.setState({content: "Pressing Fake Button"})
                 }}>Fake Update</button> 
            </div>
        );
    }
    
}