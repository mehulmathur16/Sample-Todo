import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Todo from './Todo';

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
        <>
            <div>
                <input onChange={(e) => {
                    setInput(e.target.value);
                }}></input>

                <button onClick={handleClick}>Add Todo</button>
            </div>

            {(allTodos) ? (
                allTodos.map((curr) => {
                    return (
                        <Todo curr={curr}></Todo>
                    )
                })
            ) :
                null}
        </>
    );
}

export default Home;