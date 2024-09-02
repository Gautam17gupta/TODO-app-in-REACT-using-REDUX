import Todoform from "./components/Todoform"
import TodoList from "./components/TodoList"


function App() {
  

  return (
    <div className="w-[950px] mx-auto text-center bg-gray-100 pb-4">
     <h1 className='font-bold mt-9 mb-5' >To DO List</h1>
    <Todoform></Todoform>
    <TodoList></TodoList>
    </div>
  )
}

export default App
