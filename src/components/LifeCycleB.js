import React, { Component } from 'react';

class LifeCycleB extends Component{

    constructor(props){
        super();

        this.state={
            name: 'Gupta'
        };
        console.log('LifeCycle B | Constructor');

    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle B | getDerivedStateFromProps ');
        return null;
    }

    render(){
        console.log('Lifecycle B | Render');
        return (
            <div>
                  <h3>LifeCycle B</h3>  
            </div>
        )
    }

    componentDidMount(){
        console.log('LifeCycle B | ComponentDidMount');
    }

    
    shouldComponentUpdate(){
        console.log('LifeCycle B | shouldComponentupdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycle B | getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycle B | componentDidUpdate');
    }
}

export default LifeCycleB;