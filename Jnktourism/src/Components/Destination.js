import "./DestinationStyles.css"
import DestinationData from "./DestinationData";
import imga from '../Assests/dal1.jpg';
import imgaa from '../Assests/dal4.jpg';
import imgaaa from '../Assests/vaishnodevi1.jpg';
import imgaaaa from '../Assests/katra.jpg';
const Destination =() =>{
    return(
        <div className="Destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to learn many new things.</p>
            <DestinationData heading="Dal Lake, KASHMIR" 
            text="Dal Lake, a jewel of Kashmir's natural beauty, epitomizes tranquility and allure in Srinagar, India. Revered for its serene waters and floating gardens, it's a sanctuary of peace amid the Himalayan landscape. Encircled by majestic mountains and dotted with charming houseboats, Dal Lake offers a picturesque retreat for travelers seeking solace. With its mirror-like surface reflecting the surrounding peaks and vibrant shikaras gliding gracefully along its shores, Dal Lake mesmerizes visitors with its ethereal charm. As a symbol of Kashmir's timeless allure, Dal Lake captivates hearts and minds, inviting all who behold it to immerse themselves in its sublime beauty."
             img1={imga}
             img2={imgaa} 
             CName="first-des">  
            </DestinationData>

            <DestinationData
            heading="Vaishno Devi Temple, KATRA"
            text="Vaishno Devi, located in Katra, Jammu and Kashmir, stands as a revered pilgrimage site, attracting millions of devotees seeking divine blessings. Nestled in the picturesque Trikuta Mountains, this sacred destination offers a spiritual journey of devotion and fulfillment. Pilgrims embark on a scenic trek, symbolizing their spiritual ascent towards the holy cave shrine of Mata Vaishno Devi. Along the path, numerous temples and shrines dedicated to various deities enrich the pilgrimage experience. Upon reaching the sacred cave, devotees are filled with awe and reverence as they pay homage to the divine mother, seeking solace and blessings on their spiritual quest."
            img1={imgaaa}
            img2={imgaaaa}
            CName="first-des_reverse"
            >
            </DestinationData>

        </div>
    )
}
export default Destination