import React, { useState } from 'react';
import './MyTodo.css'
import { FiEdit } from 'react-icons/fi';
import { toast } from 'react-toastify'
import Modal from '../Modal/Modal';


const MyTodoCard = ({ todo, setRefetch, reFetch }) => {
    const [ischeck, setIsCheck] = useState(false)
    const [isShow,setIsShow] = useState(false)
    const { title, description, _id, isComplete } = todo


    if (ischeck) {
        fetch(`http://localhost:5000/completeTodo/${_id}`, {
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
                    <FiEdit onClick={()=>setIsShow(true)} className='edit-icon' />

                    <input onClick={(e) => setIsCheck(e.target.checked)} type="checkbox" title='Complete Task ?' className='checkbox' name="checkbox" id="" />

                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>}
            {isShow &&  <Modal setRefetch={setRefetch} reFetch={reFetch}  setIsShow={setIsShow} todo={todo} />}
        </>
    );
};

export default MyTodoCard;