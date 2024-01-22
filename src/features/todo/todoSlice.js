import { createSlice ,nanoid} from "@reduxjs/toolkit";



const todo = localStorage.getItem('todo')!=null?JSON.parse(localStorage.getItem('todo')):[]

const initialState={
    todos:todo
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           const todo ={
                id:nanoid(),
                text:action.payload
           }
           state.todos.push(todo)

           localStorage.setItem('todo',JSON.stringify(state.todos.map(todo=>todo)))
        },


        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)

            localStorage.setItem('todo',JSON.stringify(state.todos.map(todo=>todo)))
        },

        }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer