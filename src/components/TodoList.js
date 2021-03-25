import React,{useContext} from 'react'
import {TodoContext} from '../context/TodoContext'

const TodoList =()=>{
    const {todo} = useContext(TodoContext);
    const{removeTodo} = useContext(TodoContext);

    return (
        <div className="container">
            {
                todo.length > 0 ? (
                    <div className="todo">
                        <ul className="item-list">
                            {
                                todo.map(todo =>{
                                    return(
                                        <div className="item" onClick={() => removeTodo(todo.id)}>
                                            <h2>
                                            {todo.title}
                                            </h2>
                                            <input type="checkbox" checked={todo.completed}/>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                ):(
                    <div>Null</div>
                )

            }
        </div>
    )
    
    
}

export default TodoList

