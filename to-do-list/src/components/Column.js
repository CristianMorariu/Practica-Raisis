// rafce
//TodoList
import React, { useState } from "react"
import Input from "./Input"
import Task from "./Task";
function Column() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        // verifica daca au fost introduse mai multe spati si afiseza doar 1
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        // console.log(todo, ...todos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updateTodos);

    }
    return (
        <header className="container">
            <h3>What's the Plan for Today ?</h3>
            <footer>
                <Input onSubmit={addTodo} />
                <Task todos={todos}
                    completeTodo={completeTodo} removeTodo={removeTodo} />
            </footer>
        </header>
    )
}

export default Column

