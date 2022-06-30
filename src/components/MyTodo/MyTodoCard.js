import React from 'react';
import './MyTodo.css'

const MyTodoCard = ({ todo }) => {
    const { title, description } = todo

    return (
        <div className='todo-container'>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default MyTodoCard;