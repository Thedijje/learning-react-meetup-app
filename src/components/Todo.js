import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler() {
    setModelIsOpen(true);
  }

  function closeModelHandler() {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modelIsOpen && (
        <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler} />
      )}
      {modelIsOpen && <Backdrop onClick={closeModelHandler} />}
    </div>
  );
}

export default Todo;
