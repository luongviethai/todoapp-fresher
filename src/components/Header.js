import React, { memo, useState } from 'react'
import { toast } from 'react-toastify';
const Header = memo((props) => {
    const [text, setText] = useState('')
    const { addTodo } = props

    const onAddTodo = (event) => {
        if (event.key === 'Enter' && text) {
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('')
            toast.success(" Add todo success!")
        }
        if(event.key === 'Enter' && !text){
            toast.error('Please enter your todo')
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onAddTodo}
            />
        </header>
    )
})

export default Header