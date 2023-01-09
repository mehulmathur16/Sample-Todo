import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Todo from './Todo';
import './styles/home.scss'

function Home() {

    const [allTodos, setAllTodos] = useState([]);
    const [input, setInput] = useState('');

    const getTodos = async () => {
        const todos = await axios.get('https://dummyjson.com/todos')
        console.log(todos.data.todos);
        setAllTodos(todos.data.todos);
    }

    const handleClick = async () => {
        await axios.post('https://dummyjson.com/todos/add', {
            todo: input,
            completed: false,
            userId: 5,
        })
            .then((res) => {
                console.log(res);
            })
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className='todos-container'>
            <div className='todos-container__header'>
                <input onChange={(e) => {
                    setInput(e.target.value);
                }}></input>

                <button onClick={handleClick} className='todos-container__header__add-button'>Add Todo</button>
            </div>

            {(allTodos) ? (
                allTodos.map((curr) => {
                    return (
                        <Todo curr={curr}></Todo>
                    )
                })
            ) :
                null}
        </div>
    );
}

export default Home;