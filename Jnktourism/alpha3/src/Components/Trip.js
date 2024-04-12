import "./TripStyles.css";
import TripData from "./TripData";
import imga from '../Assests/raghunath.jpg';
import imgaa from '../Assests/ladakh.jpg';
import imgaaa from '../Assests/kash.jpg';
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique locations</p>
            <div className="tripCard">
                <TripData
                img={imga}
                heading="JAMMU"
                text="Jammu enchants with ancient temples, vibrant markets, and scenic countryside, offering spiritual solace, cultural immersion, and natural beauty. Nestled in northern India's majestic landscapes, it beckons travelers to discover its timeless allure."></TripData>
                
                <TripData
                img={imgaaa}
                heading="KASHMIR"
                text="Immerse yourself in Kashmir's stunning landscapes, from lush valleys to tranquil lakes, and experience its rich culture, nestled amidst the majestic Himalayas for an unforgettable journey of beauty and tranquility."
                ></TripData>

                <TripData
                img={imgaa}
                heading="LADAKH"
                text="Ladakh captivates with rugged landscapes, ancient monasteries, and vibrant culture, offering adventurous treks, spiritual retreats, and breathtaking vistas amidst the remote Himalayan beauty of northern India."
                ></TripData>
            </div>
        </div>
    )
}
export default Trip