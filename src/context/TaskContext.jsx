import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function crearTarea(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        titulo: task.titulo,
        descripcion: task.descripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        crearTarea
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
