import { useState } from "react";

function TaskForm({crearTarea}) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const manejador_Titulo = (e) => {
    e.preventDefault();
    const nuevaTarea ={
        titulo: titulo
    }

    crearTarea({titulo, descripcion});
    setTitulo('');
    setDescripcion('');
  };

  return (
    <form onSubmit={manejador_Titulo}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        autoFocus
      />
      <textarea placeholder="Escribe la descripcion de la tarea"
      onChange={(d)=>setDescripcion(d.target.value)}
      value={descripcion}
    ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
