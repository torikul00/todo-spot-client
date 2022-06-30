import React from 'react';

const CompletedTaskCard = ({ todo }) => {

    const { title, description, isComplete } = todo
    return (
        <>
            {isComplete ?
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                :
                null
            }

        </>
    );
};

export default CompletedTaskCard;