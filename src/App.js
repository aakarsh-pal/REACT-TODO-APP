import React from "react";
import { useState } from "react";
import "./App.scss";

const App = () => {
  const [deleteButton, setDeleteButton] = useState(false);

  const [value, setValue] = useState({
    fname: " ",
    lname: " ",
  });

  const [buttonValue, setButtonValue] = useState([]);

  const inputEvent = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const submits = (event) => {
    event.preventDefault();
    const newButtonValue = `${value.fname} ${value.lname}`;
    setButtonValue([...buttonValue, newButtonValue]);
    setDeleteButton(true);
    setValue({
      fname: "",
      lname: "",
    });
  };

  const handleDelete = (event) => {
    setButtonValue([]);
    setDeleteButton(false);
  };
  return (
    <>
      <div className="main">
        <form>
          <div className="inputs-div">
            <h1 className="app-heading">REACT APP</h1>
            <br />
            <input
              placeholder="First Name"
              className="input"
              type="text"
              onChange={inputEvent}
              name="fname"
              value={value.fname}
            />
            <br />
            <input
              placeholder="Last Name"
              className="input"
              type="text"
              onChange={inputEvent}
              name="lname"
              value={value.lname}
            />
            <br />
            <button className="submit-btn" onClick={submits}>
              Submit Me
            </button>
            <br />

            <div className="submitted-field">
              {buttonValue.map((buttonItem, index) => (
                <h2 key={index}>{buttonItem}</h2>
              ))}
              {deleteButton && (
                <button className="delete-btn" onClick={handleDelete}>
                  Delete
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
