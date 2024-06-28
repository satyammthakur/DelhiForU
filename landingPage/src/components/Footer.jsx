import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      {/* Top Section */}
      <div className={classes["top-row"]}>
        <div>
          <h1>Delhi Tours</h1>
          <p >Delhi se hai *apshabd* </p>
        </div>
        <div>
          <Link to="https://github.com/satyammthakur">
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link to="https://x.com/eagerbat_">
            <i className="fa-brands fa-square-twitter"></i>
          </Link>
          <Link to="https://www.instagram.com/satyammthakur/">
            <i className="fa-brands fa-square-instagram"></i>
          </Link>
        </div>
      </div>
      {/* Bottom Section */}
      <div className={classes["bottom-row"]}>
        {/* <div>
          <h4>Project</h4>
          <Link to="">Changelog</Link>
          <Link to="">Status</Link>
        </div> */}
        <div>
          <h4>Community</h4>
          <Link to="https://github.com/satyammthakur">GitHub</Link>
          <Link to="https://x.com/eagerbat_">Twitter</Link>
        </div>
        <div>
          <h4>Help</h4>
          <Link to="https://github.com/satyammthakur/DelhiForU">Contribute</Link>
          {/* <Link to="">TroubleShooting</Link> */}
          <Link to="mailto:notesnaryana@gmail.com">Contact Us</Link>
        </div>
        <div>
          <h4>Others</h4>
          <Link to="">Term of Service</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">License</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
