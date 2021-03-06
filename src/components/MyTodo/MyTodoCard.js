import React, { useState } from 'react';
import './MyTodo.css'
import { FiEdit } from 'react-icons/fi';
import { toast } from 'react-toastify'
import Modal from '../Modal/Modal';


const MyTodoCard = ({ todo, setRefetch, reFetch }) => {
    const [ischeck, setIsCheck] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const { title, description, _id, isComplete } = todo


    if (ischeck) {
        fetch(`https://agile-anchorage-83111.herokuapp.com/completeTodo/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setRefetch(!reFetch)
                    setIsCheck(false)
                    toast.success('Task Completed',)

                }
            })

    }

    return (
        <>
            {isComplete ? null : <div className='todo-container'>
                <div className='todo'>

                    <h2>{title}</h2>
                    <p>{description}</p>
                    <FiEdit title='Edit' onClick={() => setIsShow(true)} className='edit-icon' />
                    <input onClick={(e) => setIsCheck(e.target.checked)} type="checkbox" title='Complete Task ?' className='checkbox' name="checkbox" id="" />

                </div>
            </div>}
            {isShow && <Modal setRefetch={setRefetch} reFetch={reFetch} setIsShow={setIsShow} todo={todo} />}
        </>
    );
};

export default MyTodoCard;