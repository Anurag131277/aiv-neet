import React,{ Component} from 'react';


class ClassClick extends Component{


    clickHandler(){
        console.log('click class handler');
    }

    render(){

        return (
            <div>
                <button onClick={this.clickHandler}>Class click</button>
            </div>
        )

    }
}

export default ClassClick;