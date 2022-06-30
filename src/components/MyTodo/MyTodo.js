import React, { useEffect, useState } from 'react';
import './MyTodo.css'
const MyTodo = () => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/todos')
        .then(res => res.json())
        .then(data =>setTodos(data))
    },[])


    return (
        <div>
        <h1></h1>
        </div>
    );
};

export default MyTodo;