import React from "react";
class StateComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "KEC",
            course: "MERN"
        }
    }
    changeState = () => {
        console.log("Kongu Engineering College") 

    }
    render() {
        return (
            <div>
                <h1>This is State Component</h1>
                <h2>Hello, {this.state.name}<br></br>this is {this.state.course}class</h2>
                <h3>I am changing the state of name from {this.state.name} to {this.changeState()}</h3>
                {/*<button onClick={this.changeState}>Clickme </button>*/}
                {/* <button onMouseOver={this.changeState}>clickme</button> */}
                <button onMouseOut={this.changeState}>clickme</button>
            </div>
        )
    }
}
export default StateComponent;