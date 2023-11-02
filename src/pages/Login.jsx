import React, { useState } from "react";

export default function Login() {
  // <-------- State--->
  // <---- const [variableName, SetFuntion] = useState("initialValue")---->
  const [email, setEmail] = useState("user@gmail.com");

  function Submit() {
    console.log("submitted");
  }
  return (
    <form className="col-6 offset-3 mt-5">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="Button" className="btn btn-primary" onClick={Submit}>
        Submit
      </button>
    </form>
  );
}
