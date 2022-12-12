

function TaskList( props) {
 
  if (props.tasks.length === 0) {
    return <h1>no hay tareas aun</h1>;
  }

  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.titulo}</h1>
            <p>{task.descripcion}</p>
          </div>
      ))}
    </div>
  );
}

export default TaskList;
