//Have to work on this later but.
// Want ot to send me mail when someone writes anything here 
import classes from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={classes["form-container"]}>
      <h1>Feel free to message us we would like to hear from you!</h1>
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