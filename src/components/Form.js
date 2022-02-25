import React, { Component } from 'react';


class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            username: '',
            comment: '',
            topic: 'react'
        }
    }

    nameChangeHandler=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    commentChangeHandler= (event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    topicChangeHandler= (event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit= (event)=>{
        console.log(`Submit form data : ${this.state.username} | ${this.state.comment} | ${this.state.topic}`);
        event.preventDefault();
    }

    render(){
        const {username, comment, topic } = this.state;
        return (
            <div>
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>username: </label>
                        <input type="text"
                        // value={this.state.username}
                        value={username}
                        onChange={this.nameChangeHandler}
                        />
                    </div>
                    <div>
                        <label>Comments: </label>
                        <textarea
                        // value={this.state.comment}
                        value={comment}
                        onChange={this.commentChangeHandler}
                        ></textarea>
                    </div>
                    <div>
                        <label>Topic: </label>
                        <select
                        value={topic}
                        // value={this.state.topic}
                        onChange={this.topicChangeHandler}>
                            <option value="angular">Angular</option>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default Form;