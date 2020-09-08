import React from "react";

const TodoHeader = ({ totalItems, doneCount, doneImportant }) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <h1>My Todo List</h1>
      </div>
      <div className="d-flex flex-column">
        <span>Total items: {totalItems}</span>
        <span>Imtortamt: {doneImportant}</span>
        <span>Done: {doneCount}</span>
      </div>
    </div>
  );
};

export default TodoHeader;
