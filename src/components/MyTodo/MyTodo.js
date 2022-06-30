import React, { useEffect, useState } from 'react';

import './MyTodo.css'
import MyTodoCard from './MyTodoCard';
const MyTodo = () => {
    const [todos, setTodos] = useState([])
    const [reFetch, setRefetch] = useState(false)
    
    useEffect(() => {
        fetch('https://agile-anchorage-83111.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [reFetch])


    return (
        <>
        <div className='todos-container'>
            {
                todos?.map(todo => <MyTodoCard
                     reFetch={reFetch}
                    
                     setRefetch={setRefetch} 
                     key={todo._id}
                      todo={todo} 
                     />).reverse()
            }
            
        </div>
     
        </>
    );
};

export default MyTodo;