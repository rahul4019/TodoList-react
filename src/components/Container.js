import InputBox from "./InputBox";
import TaskContainer from "./TasksContainer";

function Container() {
  return (
    <div className="todo-container d-flex flex-column   align-items-center justify-content-evenly mx-2  rounded  p-2">
      <InputBox />
      <TaskContainer />
    </div>
  );
}

export default Container;
