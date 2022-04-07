//TodoForm
import React, { useState } from 'react'
const Input = (props) => {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <button className='todo-button'>Add todo</button>
            <input type="text"
                placeholder='Add a todo'
                value={input} name='text'
                className='todo-input'
                onChange={handleChange}
            />
        </form>
    )
}

export default Input
// export const myfunction = () => {

// }