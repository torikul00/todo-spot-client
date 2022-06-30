import React from 'react';
import { MdCheckBox } from 'react-icons/md';
import './CompletedTask.css'
const CompletedTaskCard = ({ todo }) => {

    const { title, description, isComplete } = todo
    return (
        <>
            {isComplete ?


                <div className='task-info'>
                    <h3>{title} < MdCheckBox className='text-success' /></h3>
                    <p>{description}</p>

                </div>
                :
                null
            }

        </>
    );
};

export default CompletedTaskCard;