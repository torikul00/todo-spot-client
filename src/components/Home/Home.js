import React from 'react';
import './Home.css'

const Home = () => {

    const handleTaskSubmit = (event)=>{
        event.preventDefault()
        const title = event.target.title.value
        const description = event.target.description.value
        const todo = {title,description}
       fetch('http://localhost:5000/addTodos',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(todo)
       })
       .then(res => res.json())
       .then(data => {
        if(data.acknowledged){
            event.target.reset()
            alert('Todo task added')
        }
        else{
            alert('Something went wrong')
        }
       })

    }
    return (
        <div>
            <form onSubmit={handleTaskSubmit}>
                <input name='title' type="text" placeholder='Title' className='d-block' required />
                <textarea  className='d-block' name="description" placeholder='Your task description heres' cols="30" rows="10" required></textarea>
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default Home;