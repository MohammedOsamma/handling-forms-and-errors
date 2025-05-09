import { useRef } from "react";
import { useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enterdEmail = email.current.value;
    const enterdPassword = password.current.value;

    console.log("email:", enterdEmail);
    console.log("Password:", enterdPassword);

    const emailIsValid = enterdEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);

    //to Remove the values from the input fields after submission
    email.current.value = "";
    password.current.value = "";

    console.log("Sending Http Request ...");
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please Enter Valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
