import React,{useContext, useState} from 'react'
import {TodoContext} from '../context/TodoContext'

const TodoForm =()=>{
    const{addTodo} = useContext(TodoContext);
    const[title, setTitle] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        addTodo(title);
        setTitle('');
    }


    return(
        <form onSubmit={handleSubmit} className='form'>
            <h2>Add Your Todo</h2>
            <input type="text" name="title" value={title} placeholder="Add Your Todo Here..." onChange={(e)=> setTitle(e.target.value)} required />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default TodoForm