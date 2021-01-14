import React from 'react';
const Todos = ({todos, deleteTodo})=>{

//  circle through the todo list
const todolList = todos.length ? (
    todos.map(todo=>{
        return(
            <div className = "collection-item" key = {todo.id}>
                <span onClick = { ()=> {deleteTodo(todo.id)} }className = "center">{todo.content}</span>
            </div>
        )
    })
) : (
    <p className = "center"> You have no todos </p>
)

    return(
        <div className = "todos collection">
        {todolList}
        </div>
    );
}

export default Todos;