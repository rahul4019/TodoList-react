function TaskContainer() {
  return (
    <div className="task-container d-flex flex-column rounded px-2 py-2 overflow-auto">
      <div className="task d-flex align-items-center justify-content-between p-3 my-2 rounded">
        <span className="task-content"> buy vegitables </span>
        <div className="btn-container d-flex">
          <div className="icon check-icon mx-2 fs-5">
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div className="icon delete-icon mx-2 fs-5">
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <div className="icon edit-icon mx-2 fs-5">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;
