import React, { useEffect, useState } from 'react';
import './MyTodo.css'
import MyTodoCard from './MyTodoCard';
const MyTodo = () => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/todos')
        .then(res => res.json())
        .then(data =>setTodos(data))
    },[])


    return (
        <div className='todos-container'>
        {
            todos?.map(todo => <MyTodoCard key={todo._id}  todo={todo}/>).reverse()
        }
        </div>
    );
};

export default MyTodo;