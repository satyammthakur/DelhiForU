import classes from "./Destination.module.css";
import DestinationData from "./DestinationData";
import mountain1 from "../assets/Delhi_fort.jpg";
import mountain2 from "../assets/Red_Fort.jpg";
import New_Delhi_Temple from "../assets/New_Delhi_Temple.jpg";
import mountain4 from "../assets/akshardham.jpg";

const Destination = () => {
  return (
    <div className={classes.destination}>
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        cName="first-description"
        heading="Red Fort , Delhi "
        text=" The Red Fort or Lal Qila is a historic fort in Delhi, 
        India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1639, when he decided to shift his capital from Agra to Delhi. Originally red and white, its design is credited to architect Ustad Ahmad Lahori, who also constructed the Taj Mahal. The fort represents a high point in the Mughal architecture under Shah Jahan and combines Persian palace architecture with Indian traditions."
        img1={mountain1}
        img2={mountain2}
      />
      <DestinationData
        cName="first-description-reverse"
        heading="Akshardham Temple"
        text=" Swaminarayan Akshardham is a Hindu temple and spiritual-cultural campus in Delhi, India. 
        The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, 
        the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture. 
        Inspired by Yogiji Maharaj and created by Pramukh Swami Maharaj, it was constructed by BAPS.
        It is the world's second-largest BAPS Hindu temple, following Akshardham, New Jersey, in the United States.
        The temple was officially opened on 6 November 2005 by Pramukh Swami Maharaj in the presence of 
        A. P. J. Abdul Kalam, Manmohan Singh, L.K Advani and B.L Joshi. 
        The temple, at the centre of the complex, was built according to the Vastu shastra and Pancharatra shastra."
        img1={New_Delhi_Temple}
        img2={mountain4}
      />
    </div>
  );
};

export default Destination;