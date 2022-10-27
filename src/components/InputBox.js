import { useState } from "react";
import { toast } from "react-hot-toast";

function InputBox() {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      // makes api call to post new Todo
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: `${newTodo}`,
          completed: false,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      // toast notification on success
      toast.success("Todo added successfully!", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      // toast notification on error
      toast.error("Todo can't be empty", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }

    // makes the input box empty again
    document.getElementById("todo-text").value = "";
    setNewTodo("");
  };

  // sets newTodo, text entered in the inputBox
  const handleTodoText = () => {
    let todoTitle = document.getElementById("todo-text").value;
    setNewTodo(todoTitle);
  };

  return (
    <div className="inputBox d-flex my-2  rounded ">
      <input
        type="text"
        className="input-arearounded-start px-4"
        placeholder="Title..."
        id="todo-text"
        onChange={handleTodoText}
      />
      <input
        type="button"
        value="Add"
        className="add-btn fs-5"
        onClick={addTodo}
      />
    </div>
  );
}

export default InputBox;
