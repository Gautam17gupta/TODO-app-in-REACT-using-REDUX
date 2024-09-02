import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos : [
        {
            text: "Do complete all tasks on time",
            iscompleted:false
        }
    ]
}
const TodosSlice=createSlice({
    name : 'todos',
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            const newTodo={
                text:action.payload,
                iscompleted:false
            }
            console.log("working add"+newTodo)
            state.todos.push(newTodo)
        },
        deleteTodo : (state,action)=>{
            state.todos.splice(action.payload,1);
        },
        markComplete : (state,action)=>{
            state.todos[action.payload].iscompleted=!state.todos[action.payload].iscompleted;

        },
        saveTodo : (state,action)=>{
            const {index,todotext}=action.payload;
            console.log(action.payload,'checking save')
            state.todos[index].text=todotext;
            
        }

    }
})

export const {addTodo,deleteTodo,markComplete,saveTodo}=TodosSlice.actions;
export default TodosSlice.reducer;