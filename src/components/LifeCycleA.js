import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component{

    constructor(props){
        super();

        this.state={
            name: 'Anurag'
        };
        console.log('LifeCycle A | Constructor');

    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle A | getDerivedStateFromProps ');
        return null;
    }

    changeState=()=>{
        this.setState({
            name: 'new Name'
        })
    }

    render(){
        console.log('Lifecycle A | Render');
        return (
            <div>
                  <h3>LifeCycle A - {this.state.name}</h3> 
                  <button onClick={this.changeState}>Change State</button> 
                  <LifeCycleB></LifeCycleB>
            </div>
        )
    }

    componentDidMount(){
        console.log('LifeCycle A | ComponentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifeCycle A | shouldComponentupdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycle A | getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycle A | componentDidUpdate');
    }

}

export default LifeCycleA;