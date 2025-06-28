import MainDes from '../Components/MainDes';
import Navbar from '../Components/Navbar';
import imga from '../Assests/rumii.jpg';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';
import Service from '../routes/Service';

function Home(){
    return(
    <>
    <Navbar></Navbar>
    <MainDes
    cName="hero"
    heroImg={imga}
    title="Welcome to Heaven on Earth"
    para="Visit and Explore the great beauty and diversity of Jammu & Kashmir"
    btnText="Visit!"
    where="/service"
    btnClass="show"
    />
    <Destination></Destination>
    <Trip></Trip>
    <Footer></Footer>
    </>
    )
}
export default Home;