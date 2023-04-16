import React, { useState } from "react";

function App() {
  const [fullName, setname] = useState({
    fName: "",
    lName: ""
  });

  function handelChange(event) {
    const { name, value } = event.target;

    setname((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}{" "}
      </h1>
      <form>
        <input
          onChange={handelChange}
          name="fName"
          placeholder="First Name"
          // value = {fullName.fName}
        />

        <input
          onChange={handelChange}
          name="lName"
          placeholder="Last Name"
          // value ={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
