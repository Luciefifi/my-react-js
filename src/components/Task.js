const Task = (props) =>{
    return(
      <div>
        <div
        className="Task"
        style={{backgroundColor: props.completed ? "green" : "white"}}>
            <h1>{props.taskName}</h1>
                <button onClick={()=> props.deleteTask(props.id)}>X</button>
                <button onClick={()=> props.completeTask(props.id)}>complete</button>
                </div>
      </div>  
    )
}


export default Task