import { Component } from "react";
import classes from "./Destination.module.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={classes[`${this.props.cName}`]}>
        <div className={classes["description-text"]}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className={classes["image-destination"]}>
          <img alt="alt" src={this.props.img1} />
          <img alt="alt" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;