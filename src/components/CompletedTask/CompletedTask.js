import React, { useEffect, useState } from 'react';
import './CompletedTask.css'
import CompletedTaskCard from './CompletedTaskCard';
import ComplImage from '../../images/completeTask.png'

const CompletedTask = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://agile-anchorage-83111.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return (

        <div className='complete-task-container'>
            <div className="task-banner-image">
                <img src={ComplImage} alt="" />
            </div>
            <div className='task-info-container'>
                <h2 className='text-success'> TASKS YOU HAVE COMPLETED</h2>
                {
                    todos?.map(todo => <CompletedTaskCard todo={todo} />).reverse()
                }
            </div>

        </div>
    );
};

export default CompletedTask;