import React, { Component } from 'react'

export default class AddTodo extends Component {
// seting an empty state
state ={
    content:''
}

handleChange =(e)=>{
this.setState({
    content: e.target.value
});

}

handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state);
    
    // this will help clear the input field
    this.setState({
        content:''
    });
    
    
    

}

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = "text" placeholder = "Add a new todo List" onChange = {this.handleChange} value = {this.state.content}></input>
                </form>
            
            </div>
        )
    }
}
