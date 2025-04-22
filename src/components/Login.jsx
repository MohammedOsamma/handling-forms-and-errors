import { useState } from "react";

export default function Login() {
  const [emailEnterd, setEnteredEmail] = useState("");
  const [passwordEntered, setEnteredPassword] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    console.log("email:", emailEnterd);
    console.log("Password:", passwordEntered);
  }

  function emailHanlder(event) {
    setEnteredEmail(event.target.value);
  }

  function passwordHanlder(event) {
    setEnteredPassword(event.target.value);
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
            onChange={emailHanlder}
            value={emailEnterd}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={passwordHanlder}
            value={passwordEntered}
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
