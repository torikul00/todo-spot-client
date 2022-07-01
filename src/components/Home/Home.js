import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './Home.css'
import task from '../../images/task.png'



const Home = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {

                event.preventDefault();

                handleTaskSubmit(event)
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    });

    const handleTaskSubmit = (e) => {
        if (title === '' || description === '') {
            return
        }
        e.preventDefault()
        const todo = { title, description }
        fetch('https://agile-anchorage-83111.herokuapp.com/addTodos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    document.getElementById('title').value = ''
                    document.getElementById('description').value = ''
                    toast.success('Task Added')

                }
                else {
                    toast.error('Something went wrong')
                }
            })
    }
    return (
        <>
            <div className="main-container">
                <div className="banner-image">
                    <img src={task} alt="" />
                </div>
                <form className='task-form' onSubmit={handleTaskSubmit} >
                    <div className='w-full'>
                        <h1>ADD YOUR TODO'S HERE</h1>
                        <input onChange={(e) => setTitle(e.target.value)} id='title' type="text" placeholder='Task Title' className='d-block' required />
                        <textarea onChange={(e) => setDescription(e.target.value)} className='d-block' id='description' placeholder='Your task description' cols="30" rows="5" required></textarea>
                        <button className='btn btn-primary' type='submit'>Add Todo</button>
                    </div>
                </form>
             
            </div>
        </>
    );
};

export default Home;