
export const AddTask = ({tasks,setTask,todo,setTodo}) => {

    const handleSubmit = (event) => {

      if (todo.id) {
        event.preventDefault()
        const date = new Date ()
        const updatedTask = tasks.map((to) => 
        (to.id === todo.id)?  {id : todo.id, time : `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,name : event.target.task.value} : to);

        setTask(updatedTask);
        setTodo({});

      }else {
        event.preventDefault();
        const date = new Date();
                const newTask = {
                    id : date.getTime(),
                    name : event.target.task.value,
                    time : ` ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                }
                setTask([...tasks,newTask]);
setTodo({});
      //  event.target.task.value = "";
      }
        

        
    }

//     const handleChange = (event)=> {
// setTask(event.target.value);
//     };

  return (
    <section className="addTask">
        <form  onSubmit={handleSubmit} >
            <input  value={todo.name || ""} type="text"  autoComplete="off" maxLength={25} name="task" onChange={(e) => setTodo({...todo,name : e.target.value})} />
            <button type="submit">{todo.id ? "updateTask" : "addTask" }</button>
        </form>

    </section>
  )
}
