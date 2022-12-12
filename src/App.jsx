import TaskList from "./assets/components/TaskList";
import TaskForm from "./assets/components/TaskForm";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function crearTarea(task){
    setTasks([... tasks,{
      id: tasks.length,
      titulo: task.titulo,
      descripcion: task.descripcion
    }])
  }

  return (
    <>
      <TaskForm crearTarea={crearTarea} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
