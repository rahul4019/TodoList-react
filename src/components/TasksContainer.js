function TaskContainer(props) {
  const { allTodos, Loader } = props;

  return (
    <div className="task-container d-flex flex-column rounded px-2 py-2 overflow-auto">
      {Loader ? (
        <div className="loader m-auto"></div>
      ) : (
        allTodos.map((todo) => (
          <div
            className="task d-flex align-items-center justify-content-between p-3 my-2 rounded"
            key={todo.id}
            completed={todo.completed}
          >
            <span className="task-content"> {todo.title} </span>
            <div className="btn-container d-flex">
              <div className="icon check-icon mx-2 fs-5">
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <div className="icon delete-icon mx-2 fs-5">
                <i className="fa-regular fa-trash-can"></i>
              </div>
              <div className="icon edit-icon mx-2 fs-5">
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskContainer;
