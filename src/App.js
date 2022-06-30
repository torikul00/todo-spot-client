import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import MyTodo from './components/MyTodo/MyTodo';
import Calander from './components/Calander/Calander';
import CompletedTask from './components/CompletedTask/CompletedTask';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myTodo' element={<MyTodo />} />
        <Route path='/calander' element={<Calander />} />
        <Route path='/completedTasks' element={<CompletedTask />} />
      </Routes>

    </>
  );
}

export default App;

