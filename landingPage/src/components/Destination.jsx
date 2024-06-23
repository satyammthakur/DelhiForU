import classes from "./Destination.module.css";
import DestinationData from "./DestinationData";
import mountain1 from "../assets/mountain.jpg";
import mountain2 from "../assets/7.jpg";
import mountain3 from "../assets/6.jpg";
import mountain4 from "../assets/8.jpg";

const Destination = () => {
  return (
    <div className={classes.destination}>
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        cName="first-description"
        heading="Taal Volcano, Batangas"
        text=" Taal Volcano is the second most active volcano found in the province
      of Batangas. A complex volcano in the middle of Taal Lake and is
      often called an island within a lake, that is an island within a
      lake that is on an island as well as one of the lowest volcano in
      the world having 311 meters elevation. It offers a very a
      spectacular view seen from Tagaytay Ridge. Taal volcano is located
      around 50 kilometers away from Manila, capital of the Philippines"
        img1={mountain1}
        img2={mountain2}
      />
      <DestinationData
        cName="first-description-reverse"
        heading="Mt.Daguldul, Batangas"
        text=" Taal Volcano is the second most active volcano found in the province
      of Batangas. A complex volcano in the middle of Taal Lake and is
      often called an island within a lake, that is an island within a
      lake that is on an island as well as one of the lowest volcano in
      the world having 311 meters elevation. It offers a very a
      spectacular view seen from Tagaytay Ridge. Taal volcano is located
      around 50 kilometers away from Manila, capital of the Philippines"
        img1={mountain3}
        img2={mountain4}
      />
    </div>
  );
};

export default Destination;