
import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component{

    // creating a state
    state ={
        todos:[
            {id:1 , content: 'Sleep and eat'},
            {id:2 , content: 'Fast and pray'},
            {id:3, content:'read and make money'}
        ]
        
    }

    // delete to do items
    deleteTodo = (id)=>{
      const newTodos = this.state.todos.filter(todo =>{
          return todo.id !== id;
      });

      this.setState({
        todos:newTodos
    });
    }

// addding a new todo

    addTodo =(todo)=>{
        // creating arandom id and updating the list
        todo.id = Math.random();
        let newAddTodo = [...this.state.todos, todo];
        this.setState({
            todos:newAddTodo
        });

         }

    render(){
        return(
            <div className = "too-app container">

                <h5>To Do App</h5>
            {/* // Using other components */}
            <Todos todos= {this.state.todos} deleteTodo = {this.deleteTodo}/>
            <AddTodo addTodo = {this.addTodo}/>

            </div>
        )
    }
}

export default App;