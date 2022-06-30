import React, { useEffect, useState } from 'react';
import './CompletedTask.css'
import CompletedTaskCard from './CompletedTaskCard';

const CompletedTask = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <div>

           {
            todos?.map(todo => <CompletedTaskCard todo={todo} />).reverse()
           }

        </div>
    );
};

export default CompletedTask;