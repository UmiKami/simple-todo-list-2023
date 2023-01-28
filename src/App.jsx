import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [valueInput, setValueInput] = useState("")

  function addToDo(){
    setTodos(currentValue => [...currentValue, {"id": 1, "label": valueInput, "done": false}])
  }


  return (
    <div className="App">
      <input type={"text"} onChange={(e)=>setValueInput(e.target.value)} value={valueInput} />
      <button onClick={()=>addToDo()}>Add todo</button>

      {
        todos && todos.length > 0 && todos.map((item, i)=><li style={{listStyle: 'none'}} key={i}>{item.label}</li>)
      }
    </div>
  )
}

export default App
