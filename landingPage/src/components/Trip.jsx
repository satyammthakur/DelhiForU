import classes from "./Trip.module.css";
import TripData from "./TripData";
import Trip1 from "../assets/beach-service.jpg";
import Trip2 from "../assets/12.jpg";
import Trip3 from "../assets/8.jpg";

function Trip() {
  return (
    <div className={classes.trip}>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google Maps.</p>
      <div className={classes.tripcard}>
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="The Ministry of Tourism and Creative Economy introduced InDOnesia CARE, a symbol of support for Indonesia’s strong effort in implementing the cleanliness, health, safety, and environment protocols across the tourism industry as mandatory precautions. All to assure travelers that InDOnesia CARE for your safety, health, hygiene and comfort."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="The Ministry of Tourism and Creative Economy introduced InDOnesia CARE, a symbol of support for Indonesia’s strong effort in implementing the cleanliness, health, safety, and environment protocols across the tourism industry as mandatory precautions. All to assure travelers that InDOnesia CARE for your safety, health, hygiene and comfort."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="The Ministry of Tourism and Creative Economy introduced InDOnesia CARE, a symbol of support for Indonesia’s strong effort in implementing the cleanliness, health, safety, and environment protocols across the tourism industry as mandatory precautions. All to assure travelers that InDOnesia CARE for your safety, health, hygiene and comfort."
        />
      </div>
    </div>
  );
}

export default Trip;