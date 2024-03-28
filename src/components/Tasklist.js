
export const Tasklist = ({tasks,setTask,todo,setTodo}) => {
  // const handleClick = ()=> setTask([]);

  const handleEdit = (id) => {
const selectedTask = tasks.find((todo) => todo.id === id);

setTodo(selectedTask);


  }
  const handleDelete = (id) => {
    const updatedList = tasks.filter((todo) => todo.id !== id );
    setTask(updatedList);
  }
  return (
    <section className="showTask">
        <div className="head">
            <div>
            <span className="title">Todo</span>
            <span className="count">{tasks.length}</span>
            </div>
            {/* <button className="clearAll"  onClick={handleClick}>clear All</button> */}
        </div> 
          

       <ul>
       {tasks.map(task => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>                
                        <i onClick={()=> handleEdit(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={()=> handleDelete(task.id)} className="bi bi-trash" ></i>
                    </li>
                ))}
       </ul>
    </section>
  )
}
