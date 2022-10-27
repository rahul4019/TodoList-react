import { useState } from "react";
import { toast } from "react-hot-toast";

function TaskCard(props) {
  const { title, id, completed, filterTodos } = props;

  const [edit, setEdit] = useState(false);
  const [editedText, setEditText] = useState("");

  const handleDeleteBtn = (todoId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${todoId}`, {
      method: "DELETE",
    });

    filterTodos(todoId);

    toast.success("Deleted successfully!", {
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleEdit = (todoId) => {
    console.log(editedText);
    if (!edit) {
      setEdit(true);
    } else if (editedText !== "") {
      fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method: "PUT",
        body: JSON.stringify({
          id: todoId,
          title: `${editedText}`,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          toast.success("Todo updated successfully!", {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        });
      setEdit(false);
      setEditText("");
    } else {
      toast.error("Empty todo can't be updated", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setEdit(false);
      setEditText("");
    }
  };

  const handleEditedText = () => {
    const text = document.getElementById("edited-text").value;
    setEditText(text);
  };

  return (
    <div
      className="task d-flex align-items-center  p-3 my-2 rounded"
      completed={completed.toString()}
    >
      {/* complete icon */}
      {completed === true ? (
        <div className="check-icon me-3 fs-5 d-inline-block">
          <i className="fa-regular fa-circle-check" style={{color: "#80ED99"}}></i>
        </div>
      ) : (
        <div className="check-icon me-3 fs-5 d-inline-block">
          <i className="fa-regular fa-circle-check"></i>
        </div>
      )}

      {/* task content */}
      {/* {todo.completed ? (
          <span className="task-content flex-fill text-decoration-line-through ">
            {todo.title}
          </span>
        ) : (
          <span className="task-content flex-fill ">{todo.title}</span>
        )} */}

      {edit ? (
        <input
          type="text"
          id="edited-text"
          placeholder={title}
          className="rounded bg-dark p-3"
          onChange={() => handleEditedText()}
        />
      ) : (
        <span className="task-content flex-fill ">{title}</span>
      )}

      {/* delete, edit button container */}
      <div className="btn-container d-flex ">
        <div className="icon delete-icon mx-2 fs-5">
          <i
            className="fa-regular fa-trash-can"
            onClick={() => handleDeleteBtn(id)}
          ></i>
        </div>
        <div className="icon edit-icon mx-2 fs-5">
          <i
            className="fa-solid fa-pen-to-square "
            onClick={() => handleEdit(id)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
