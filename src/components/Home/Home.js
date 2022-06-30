import React, { useEffect, useState } from 'react';
import './Home.css'


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
        e.preventDefault()
        const todo = { title, description }
        fetch('http://localhost:5000/addTodos', {
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
                    alert('Todo task added')

                }
                else {
                    alert('Something went wrong')
                }
            })
    }
    return (
        <form onSubmit={handleTaskSubmit} >
            <input onChange={(e) => setTitle(e.target.value)} id='title' type="text" placeholder='Title' className='d-block' required />
            <textarea onChange={(e) => setDescription(e.target.value)} className='d-block' id='description' placeholder='Your task description heres' cols="30" rows="10" required></textarea>
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default Home;