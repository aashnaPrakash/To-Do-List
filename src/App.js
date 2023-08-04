import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useState, useEffect } from "react";

function App() {
  function addTask(task) {
    setTasks([...tasks, task]);
  }
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(taskToBeDeleted) {
    const newTasks = tasks.filter((task) => {
      return task.id !== taskToBeDeleted.id;
    });
    setTasks(newTasks);
  }

  function checkTask(id) {
    const newTasksCheck = tasks.map((task, index, array) => {
      if (task.id === id) {
        task.check = !task.check;
      }
      return task;
    });
    setTasks(newTasksCheck);
  }

  function updateTask(id, body, onClose) {
    const info = body.trim();
    const newTasksUpdate = tasks.map((task, index, array) => {
      if (task.id === id) {
        task.body = body;
        task.check = false;
      }
      return task;
    });

    setTasks(newTasksUpdate);
  }

  return (
    <section className="vh-100" style={{ background: "#eee" }}>
      <div className="container py-5 h-800">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">

                <h4 className="text-center my-3 pb-3">To Do List</h4>

                <AddTask addTask={addTask} />
                <TaskList
                  tasks={tasks}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                  checkTask={checkTask}
                />


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
