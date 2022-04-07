//todo
import React from 'react'
import { useState } from 'react'
import Input from './Input'
// import { myfunction } from './Input'
function Task({ todos, completeTodo, removeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    return <>
        {todos.map((todo, index) => (
            <div className={todo.isComplete ? 'todo-row complete ' : 'task'} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                    <input className='check' type="checkbox" name="done" id="done" onClick={() => removeTodo(todo.id)} />
                </div>
                {/* <div className='check'>
                </div> */}
            </div>
        ))
        }
    </>
}

export default Task