import { useState, useContext } from "react";
import {TaskContext} from '../../context/TaskContext'


function TaskForm() {
  const [titulo, setTitulo] = useState("");

  const [descripcion, setDescripcion] = useState("");

const {crearTarea} = useContext(TaskContext);

  const manejador_Titulo = (e) => {
    e.preventDefault();


    crearTarea({titulo, descripcion});
    setTitulo('');
    setDescripcion('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={manejador_Titulo} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">
          Crear Tarea
        </h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"  
      />
      <textarea placeholder="Escribe la descripcion de la tarea"
      onChange={(d)=>setDescripcion(d.target.value)}
      value={descripcion}
      className="bg-slate-300 p-3 w-full mb-2"
    ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
