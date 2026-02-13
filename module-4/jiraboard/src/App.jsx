import React from 'react'
import TaskForm from "./components/TaskForm/task-form";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <h1 style={{textAlign: "center", margin:"50px"}}>Jira Board</h1>
      <TaskForm />
      <main className="app_main">
        <section className="task_column">Section 1</section>
        <section className="task_column">Section 1</section>
        <section className="task_column">Section 1</section>
        <section className="task_column">Section 1</section>
      </main>
    </div>
  )
}

export default App