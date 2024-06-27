import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      {/* Top Section */}
      <div className={classes["top-row"]}>
        <div>
          <h1>Delhi Tours</h1>
          <p>Delhi se hai *apshabd* </p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>{" "}
      {/* Bottom Section */}
      <div className={classes["bottom-row"]}>
        <div>
          <h4>Project</h4>
          <a href="">Changelog</a>
          <a href="">Status</a>
          <a href="">License</a>
          <a href="">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="">GitHub</a>
          <a href="">Issues</a>
          <a href="">Project</a>
          <a href="">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="">Support</a>
          <a href="">TroubleShooting</a>
          <a href="">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="">Term of Service</a>
          <a href="">Privacy Policy</a>
          <a href="">License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;