import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import deleteSvg from '../assets/delete.svg'
import '../App.css'

function Todo() {
 
  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };
  const originalDate = new Date(); 
  const formattedDate = formatDate(originalDate);

   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()
    return (
       <>

       
       {todos.map((todo,i)=>(
         <div key={todo.id} className='table-container'>
        
          {i===0 && <div className='todo'>MY PLANS</div>}

             <table className="custom-table">
                { i===0 && (
               <thead>
                 <tr>
                   <th >Id</th>
                   <th  >Mission</th>
                   <th >Created Date</th>
                   <th > 
                      <img src={deleteSvg} alt="X" className='icon-d' />
                 </th>
                 </tr>
               </thead>
               )}
               <tbody>
               <tr>
                 <td>{i}</td>
                 <td className='mission-box'>{todo.text}</td>
                 <td>{formattedDate}</td>
                 <td>
                 <button
                     onClick={()=>dispatch(removeTodo(todo.id))}
                     className='deleteb'>
                 
                      <img src={deleteSvg} alt="X" className='icon-d' />
                 </button>

                 </td>
               </tr>
               </tbody>
             </table>
        </div>
       ))}
     </>
   )
}

export default Todo
