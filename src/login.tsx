import React, { FormEvent } from "react";
import { json, Link, useNavigate } from "react-router-dom";

export default function Login() {
  const Navigate = useNavigate();
  let submitForm = (e: FormEvent) => {
    e.preventDefault();
    let validate = new FormData(e.target as HTMLFormElement);
    let Values: Record<string, string> = {};
    validate.forEach((value, key) => {
      Values[key] = value as string;
    });
    console.log(Values);
    fetch("/validateLogin", {
      method: "POST",
      body: JSON.stringify(Values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        console.log(response, "Successfully logged in", Navigate("/admin"));
      } else {
        (alert("Please put in the right details"));
      }
    });
  };
  return (
    <div className="login">
      <h2>Login Page</h2>
      <form className="formcheck" onSubmit={submitForm}>
        <label htmlFor="name"> Staff User Name</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="Password">PassWord</label>
        <br />
        <input type="password" id="password" name="password" />
        {/* <Link to="/admin">
          <button className="btnBelow" type="button">
            Login
          </button>
        </Link> */}
        <input type="submit" value="Login" />
      </form>
      <div>
        <Link to="/Home">
          <button className="btnBelow" type="button">
            Return
          </button>
        </Link>
      </div>
    </div>
  );
}
