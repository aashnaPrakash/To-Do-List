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
                                <input className="form-check-input" type="checkbox"/>
                            </div></td>
                            <td className="w-75">{task.body}</td>
                            <td className="w-25">
                                <DeleteTask
                                    task={task}
                                    deleteTask={deleteTask}
                                />
                                <UpdateTask task={task} updateTask={updateTask} />
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </>
    );
}

export default TaskList;
