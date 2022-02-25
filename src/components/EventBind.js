import React, { Component } from 'react';


class EventBind extends Component{


    constructor(){
        super();
        this.state={
            message: 'hello'
        }
        // this.changeMessage= this.changeMessage.bind(this);
    }

    // changeMessage(){
    //     this.setState({
    //         message: 'GoodBye'
    //     })
    // }

    changeMessage= ()=>{
        this.setState({
            message: 'GoodBye!'
        })
    }

    render(){

        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.changeMessage.bind(this)}>Click Me</button> */}
                {/* <button onClick={ ()=> this.changeMessage()} >Click Me</button> */}
                <button onClick={this.changeMessage} >Click Me</button>

            </div>
        )
    }
}

export default EventBind;