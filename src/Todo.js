import React from 'react';
import './styles/todo.scss';

function Todo({ curr }) {

    const deleteTodo = () => {
        fetch('https://dummyjson.com/todos/' + curr.id, {
            method: 'DELETE',
        })
            .then((res) => {
                console.log(res);
            })
    }


    return (
        <div className='todo-container'>
            <div className='todo-container__todo'>
                <p key={curr.id}>{curr.todo}</p>
            </div>

            <div className='todo-container__delete-button'>
                <button onClick={deleteTodo}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;