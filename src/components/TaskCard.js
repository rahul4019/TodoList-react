import { useState } from "react";
import { toast } from "react-hot-toast";

function TaskCard(props) {
  const { title, id, completed, filterTodos } = props;

  const [edit, setEdit] = useState(false);
  const [editedText, setEditText] = useState("");

  // handles deletion of  todo
  const handleDeleteBtn = (todoId) => {
    // api request to delete todo
    fetch(`https://jsonplaceholder.typicode.com/posts/${todoId}`, {
      method: "DELETE",
    });

    // removes todo from the allTodo based on passed todoId
    filterTodos(todoId);

    // toast notification after deletion
    toast.success("Deleted successfully!", {
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  // handles edit functionality of todo
  const handleEdit = (todoId) => {
    if (!edit) {
      setEdit(true);
    } else if (editedText !== "") {
      // api call for updation of todo
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
          console.log(json);
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

  // sets value of editText
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
          <i
            className="fa-regular fa-circle-check"
            style={{ color: "#80ED99" }}
          ></i>
        </div>
      ) : (
        <div className="check-icon me-3 fs-5 d-inline-block">
          <i className="fa-regular fa-circle-check"></i>
        </div>
      )}

      {/* todo text */}
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
