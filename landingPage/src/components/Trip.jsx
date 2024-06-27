import classes from "./Trip.module.css";
import TripData from "./TripData";
import Trip1 from "../assets/Jama_Masjid.jpg";
import Trip2 from "../assets/hauz-khas-village.jpg";
import Trip3 from "../assets/yulu.jpeg";

function Trip() {
  return (
    <div className={classes.trip}>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google Maps.</p>
      <div className={classes.tripcard}>
        <TripData
          image={Trip1}
          heading="Trip to Purani Delhi"
          text="Old Delhi (Hindustani: Purani Dilli) is an area in the Central Delhi district of Delhi, India. It was founded as a walled city and officially named Shahjahanabad in 1648, when Shah Jahan decided to shift the Mughal capital from Agra. The construction of the city was completed in 1648, and it remained the capital of Mughal India until its fall in 1857, when the British Empire took over as paramount power in the Indian subcontinent.

It serves as the symbolic heart of metropolitan Delhi and is known for its bazaars, street food, shopping locations and its Islamic architecture; Jama Masjid being the most notable example, standing tall in the midst of the old city. Only a few havelis are left and maintained."
        />
        <TripData
          image={Trip2}
          heading="Trip to Hauz Khas"
          text="Hauz Khas village was known in the medieval period for the amazing buildings built around a reservoir and drew a large congregation of Islamic scholars and students to the Madrasa for Islamic education. Today, some of India's most prestigious institutes are situated in the neighborhood, including the Indian Institute of Technology, the All India Institute of Medical Sciences and the Indian Institute of Foreign Trade. The village itself retains its old-world charm, enhanced by well-manicured green parks planted with ornamental trees all around with walk ways, and surrounded by gentrified market and residential complexes which have sprung up around the old village"
        />
        <TripData
          image={Trip3}
          heading="Yulu Rides"
          text="Imagine gliding through the bustling streets, effortlessly weaving through traffic, and zipping past busy intersections, all while enjoying the fresh air and saving the environment. Well, that's the magic of Yulu, a shared electric mobility service that's revolutionising the way we move around our cities.  

With a 4 million+ user base, Yulu has improved the lives of people and made an impressive mark in the transport and mobility sector in India. Remember, Yulu bikes aren't bicycles, but two-wheeler electric vehicles that come with a host of technology-enabled features to make your rides stylish, smooth and sustainable. So if you're tired of sitting in traffic jams and waiting for public transportation, or just want a fun and eco-friendly way to get around, look no further than Yulu's electric two-wheelers! "
        />
      </div>
    </div>
  );
}

export default Trip;