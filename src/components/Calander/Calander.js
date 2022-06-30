import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'
import './Calander.css'

export default function Example() {
 
  return (
    <div className="calander-container">

     <div >
      <h1 className='text-center mb-4 text-info '>Today's Date</h1>
     <DayPicker  />
     </div>
       
   
    </div>
  );
}