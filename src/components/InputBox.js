function InputBox() {
  return (
    <div className="inputBox d-flex my-2  rounded ">
      <input
        type="text"
        className="input-arearounded-start px-4"
        placeholder="Title..."
      />
      <input type="button" value="Add" className="add-btn fs-5" />
    </div>
  );
}

export default InputBox;
