import { useState } from "react";
import { nanoid } from "nanoid";


function AddTask({ addTask }) {
    const [content, setContent] = useState("");

    function addNewTask(e) {
        e.preventDefault();
        const taskText = content.trim();
        if(taskText.length){
            const task = {
                id: nanoid(),
                body: taskText,
                check: false
            };
    
            addTask(task);
        }
        setContent("");
    }

    return (
        <form className="row g-3 mb-4 pb-2">
            <div className="col-10">
                <div className="form-outline">
                    <input type="text" className="form-control" value={content}
                        onChange={(e) => setContent(e.target.value)} />
                </div>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-primary" onClick={addNewTask}>Add</button>
            </div>
        </form>

    );
}

export default AddTask;
