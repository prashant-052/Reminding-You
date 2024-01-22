import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import '../App.css'
import SvgIcon from '../assets/remindme.svg'
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim().length !== 0)
        dispatch(addTodo(input))
        setInput('')
    }
    return (
       <form onSubmit={handleSubmit} className='container' >
       <div className='input'>
       <input type="text"
            className="input-field"
            placeholder="What do you like to remind you.."
            onChange={(e)=>{
             setInput(e.target.value)
            }}
           value={input}
       />
  
      </div>
       <div className='btn'>      
       <button className="custom-button">
       <img src={SvgIcon} alt="Remind me" className="icon" />   
       </button>
       </div>


       </form>
    )
}

export default AddTodo
