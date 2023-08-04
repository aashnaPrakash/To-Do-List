import React from "react";
  
  
  function DeleteTask({ task, deleteTask }) {
    return (
        <button type="button" className="btn btn-danger" onClick={() => deleteTask(task)}><span className="bi-trash"></span></button>
    );
  }
  
  export { DeleteTask };
  