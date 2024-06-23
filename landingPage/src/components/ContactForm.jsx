import classes from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={classes["form-container"]}>
      <h1>Send a message to us..!</h1>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Subject"></input>
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;