import React, { useState } from 'react';
import './MyTodo.css'
import { FiEdit } from 'react-icons/fi';


const MyTodoCard = ({ todo, setRefetch, reFetch }) => {
    const [ischeck, setIsCheck] = useState(false)
    const { title, description, _id, isComplete } = todo


    if (ischeck) {
        fetch(`http://localhost:5000/updateTodo/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setRefetch(!reFetch)
                }
            })

    }

    return (
        <>
            {isComplete ? null : <div className='todo-container'>
                <div className='todo'>
                    <FiEdit className='edit-icon' />

                    <input onClick={(e) => setIsCheck(e.target.checked)} type="checkbox" className='checkbox' name="checkbox" id="" />

                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>}
        </>
    );
};

export default MyTodoCard;