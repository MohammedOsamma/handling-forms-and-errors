import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("email:", enteredValues.email);
    console.log("Password:", enteredValues.password);
  }

  function enteredValuesHandler(idintfier, event) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [idintfier]: event.target.value,
    }));
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => enteredValuesHandler("email", event)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => enteredValuesHandler("password", event)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
