/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, markComplete, saveTodo } from "../redux/slices/TodosSlice";

export default function TodoItem({todo,index}){
    const todos=useSelector((state=>state.todos.todos));
    const dispatch=useDispatch();

    const [editInput, setEditInput] = useState(false);
    const [todotext, setTodoText] = useState('');

    useEffect(()=>{
        if(todo?.text){
            setTodoText(todo.text);
        }
    },[todo?.text])

    const saveHandler = () => {
      setEditInput(!editInput);
      console.log(index,todotext)
      dispatch(saveTodo({index,todotext}))
    };
    const editHandler = () => {
      setEditInput(!editInput);
      console.log("edit is working");
    };

    return(
        <div className="flex  flex-row justify-between items-center">
              {console.log(todo,index)}
            <div className=" w-[20%] flex items-center">
               <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 ml-6 "
                onChange={() => dispatch(markComplete(index))}
               />
            </div>

            <div className={`${todo?.iscompleted ? "line-through" : ""} text-left  w-[60%] px-5`}>
                {editInput ? (
                <input
                type="text"
                value={todotext}
                onChange={(e) => setTodoText(e.target.value)}
                className="w-[700]">
                </input>) : (todo?.text)}
            </div>

            {editInput ? (<div className=" w-[20%]">
                <button className="py-1 bg-white px-2 text-blue-500" onClick={saveHandler}>
                  save
                </button>
            </div>) : ( <div className="mr-4  w-[20%]">
                <button className="py-1 bg-white text-red-600" onClick={() => dispatch(deleteTodo(index))}>
                  Delete
                </button>
                <button className="py-1 bg-white px-2 text-blue-500" onClick={editHandler}>
                  Edit
                </button>
            </div>
            )}


        </div>

    )
}