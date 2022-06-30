import React, { useState } from 'react';
import './Modal.css'
import  {toast} from 'react-toastify'
const Modal = ({ todo, setIsShow ,setRefetch,reFetch}) => {
    const [tit, setTit] = useState(todo?.title)
    const [des, setDes] = useState(todo?.description)
    const handleTaskUpdate = () => {

        const updateDoc = { title: tit, description: des }

        fetch(`https://agile-anchorage-83111.herokuapp.com/updateTodo/${todo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoc)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    setRefetch(!reFetch)
                    setIsShow(false)
                    toast.success('Updated Successfully')
                }
            })
    }

    return (
        <div className='overly'>
            <div className="modal-container">

                <input onChange={(e) => setTit(e.target.value)} type="text" value={tit} />
                <textarea onChange={(e) => setDes(e.target.value)} name="" id="" value={des} cols="30" rows="10"></textarea>

                <button onClick={handleTaskUpdate}>Update</button>
                <button onClick={() => setIsShow(false)}>Cancel</button>
            </div>
        </div>
    );
};

export default Modal;
