import axios from 'axios'
import React,{useState, useEffect, createContext} from 'react'
import uuid from 'uuid/dist/v1'

export const TodoContext = createContext()
const TodoContextProvider = (props) => {
    const[todo, setTodo] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((resp)=>{
            console.log(resp.data)
            setTodo(resp.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);
    const addTodo =(title)=>{
        axios.post('https://jsonplaceholder.typicode.com/todos',{
            title:title,
            completed:false,
            id:uuid()
        })
        .then(({data}) => setTodo([...todo,data]));
    }

    const removeTodo =(id) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        // .then((resp)=>
        // )
        setTodo(todo.filter(item => item.id !== id))
    }

    return (
        <TodoContext.Provider value={{todo, addTodo , removeTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider



