import classes from "./SignupForm.module.css";

function SignUpForm() {
  return (
    <div className={classes["signup-container"]}>
      <h1>Sign Up</h1>
      <form>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <p>
          Already a member? <a href="/">Log In</a>
        </p>
      </form>
      <button>Sign Up</button>
    </div>
  );
}

export default SignUpForm;