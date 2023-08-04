import React from "react";
import UpdateTask from "./UpdateTask";
import { DeleteTask } from "./DeleteTask";
import img from '../images/empty.svg';

function TaskList({ tasks, updateTask, deleteTask, checkTask }) {
    if (!tasks.length) {
        return (
            <div className="text-center">
                <img src={img}></img>
            </div>
        );
    }

    return (
        <>
            <table className="table mb-2">
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id} style={{verticalAlign: 'middle'}}>
                            <td><div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={() => checkTask(task.id)}/>
                            </div></td>
                            <td className="w-75"><p style={task.check?{textDecoration: "line-through"}:{}}>{task.body}</p></td>
                            <td className="w-25" style={{textAlign: "end"}}>
                                <DeleteTask
                                    task={task}
                                    deleteTask={deleteTask}
                                />
                                <UpdateTask tasks={tasks} task={task} updateTask={updateTask} />
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </>
    );
}

export default TaskList;
