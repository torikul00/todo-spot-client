import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import './MyTodo.css'
import MyTodoCard from './MyTodoCard';
const MyTodo = () => {
    const [todos, setTodos] = useState([])
    const [reFetch, setRefetch] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        fetch('https://agile-anchorage-83111.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data)
                setLoading(false)
            })
    }, [reFetch])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (!isLoading) {

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
    }

};

export default MyTodo;