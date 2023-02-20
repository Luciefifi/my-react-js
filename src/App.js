
                import './App.css';
                import { useState } from 'react';
                function App() {
                var [todoList , setTodoList] = useState([])
                const [newTask , setNewTask] = useState("")

                const handleChange = (event) =>{
                  setNewTask(event.target.value)
                  
                }

                const addTask = () =>{
                const task = {
                    id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
                    taskName : newTask
                  }
                  setTodoList( [...todoList , task])
                }

                const deleteTask =  (id) => {
                const newTodoList = todoList.filter((task) =>{
                  if(task.id === id)
                  {
                    return false
                  }
                  else{
                    return true
                  }

                })
                setTodoList(newTodoList)
                }



                return(
                <div  className="App">
                <div className='task'>
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
                </div>
                <div className='List'>
                  {
                    todoList.map((task) =>{
                      
                return <div><h1>{task.taskName}</h1>
                <button onClick={()=> deleteTask(task.id)}>X</button></div>

                    })
                  }
                </div>





                </div>
                )
                }




                export default App;
