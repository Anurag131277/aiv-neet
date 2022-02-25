import React, {Component} from 'react';
//class component
class Welcome extends Component {

    constructor(){
        super();
        this.state={
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
       this.setState({
           message: 'Thank you for subscribing'
       })
    }

    render(){
    // return (
    //     <div>
    //         <h1>{ this.state.message } </h1>
    //         <button onClick={()=>this.changeMessage()}>Subscribe</button>
    //     </div>
    // )
    const {name,heroName} = this.props;
    return (
        <div>
            <h1> Welcome for visting. </h1>
        </div>
    )
    }

}

export default Welcome;