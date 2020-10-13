// index.js
import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

const Form = ({ showAlert }) => {
  const refNodeId = React.useRef(null);

  const [error, setError] = React.useState(null);
  const [modelName, setModelName] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.dir(refNodeId.current.value); // same as below
    // console.dir(event.target.elements.requestName.value);
    const requestName = event.target.elements.requestName.value;
    showAlert(requestName);
  };

  function inputControl(event) {
    setError(null);
    const { value } = event.target;
    const isUpperCase = value === value.toUpperCase();
    if (isUpperCase) {
      setModelName(value);
    } else {
      setError(isUpperCase ? null : "Converted to UPPER CASE");
      setModelName(value.toUpperCase());
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="requestName">Request Name:</label>
        <input
          required
          value={modelName}
          onChange={inputControl}
          ref={refNodeId}
          type="text"
          id="requestName"
        />
      </div>
      <button type="submit">Submit</button>
      {error ? (
        <p style={{ color: "white", fontSize: "25px" }}>{error}</p>
      ) : null}
    </form>
  );
};

function App() {
  const showAlert = (requestName) => alert(`you have entered ${requestName}`);
  return (
    <div
      style={{
        display: "grid",
        height: "100vh",
        width: "'100vw",
        placeItems: "center",
      }}
    >
      <div className="form_container">
        <h1>React Form</h1>
        <Form showAlert={showAlert} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
