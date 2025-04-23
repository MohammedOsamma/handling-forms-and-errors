import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("email:", enteredValues.email);
    console.log("Password:", enteredValues.password);
  }

  function enteredValuesHandler(identifier, event) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [identifier]: event.target.value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  const invalidEmail = didEdit.email && !enteredValues.email.includes("@");
  const invalidPassword =
    didEdit.password && enteredValues.password.trim().length < 6;

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label={"Email"}
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => enteredValuesHandler("email", event)}
          value={enteredValues.email}
          error={invalidEmail && <p>Please Enter Valid Email</p>}
        />

        <Input
          label={"Password"}
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => enteredValuesHandler("password", event)}
          value={enteredValues.password}
          error={invalidPassword && <p>Please Enter Valid Password</p>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
