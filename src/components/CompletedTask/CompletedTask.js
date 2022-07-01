import React, { useEffect, useState } from 'react';
import './CompletedTask.css'
import CompletedTaskCard from './CompletedTaskCard';
import ComplImage from '../../images/completeTask.png'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const CompletedTask = () => {

    const [todos, setTodos] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        fetch('https://agile-anchorage-83111.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (!isLoading) {
        return (

            <div className='complete-task-container'>
                <div className="task-banner-image">
                    <img src={ComplImage} alt="" />
                </div>
                <div className='task-info-container'>
                    <h2 className='text-success text-center py-3'> TASKS YOU HAVE COMPLETED</h2>
                    {
                        todos?.map(todo => <CompletedTaskCard todo={todo} />).reverse()
                    }
                </div>

            </div>
        );
    }
};

export default CompletedTask;