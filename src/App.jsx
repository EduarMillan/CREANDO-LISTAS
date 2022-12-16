import TaskList from "./assets/components/TaskList";
import TaskForm from "./assets/components/TaskForm";

import { useState, useEffect } from "react";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
      <TaskForm/>
      <TaskList/>
      </div>
     
    </main>
  );
}

export default App;
