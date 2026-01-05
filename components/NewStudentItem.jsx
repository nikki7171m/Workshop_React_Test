import React, { useState } from "react";
import "./NewStudentItem.css";

const NewStudentItem = () => {

    const [curName, setCurName] = useState("");
    const [curSurname, setCurSurname] = useState("");
    const [curAge, setCurAge] = useState("");

    const nameChangeHandler = (event) => {
        setCurName(event.target.value);
    };
    const surNameChangeHandler = (event) => {
        setCurSurname(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setCurAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newStudent = {
            name: curName,
            surname: curSurname,
            age: Number(curAge)
        }

        props.onAddStudent(newStudent)

        setCurName("")
        setCurSurname("")
        setCurAge("")
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="NewStudentContainer">
        <div className="StudentInput">
          <label>Name</label>
          <input value={curName} onChange={nameChangeHandler} type="text" />
        </div>
        <div className="StudentInput">
          <label>Surname</label>
          <input value={curSurname} onChange={surNameChangeHandler} type="text" />
        </div>
        <div className="StudentInput">
          <label>Age</label>
          <input value={curAge} onChange={ageChangeHandler} type="number" min ="0" max="120" step="1" />
        </div>
      </div>
      <div className="SubmitButton">
        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default NewStudentItem;
