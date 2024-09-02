/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

export default function TodoList(){
    const todos=useSelector((state)=>state.todos.todos);
    return(
        <div className="bg-white w-[900px] mx-auto -mt-7 pb-5">
            {console.log(todos)}
            {todos.map((todo,index)=>(
                <div key={index}>
                    <TodoItem
                    todo={todo}
                    index={index}/>
                </div>
            ))}
        </div>
    )
}