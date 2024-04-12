import MainDes from '../Components/MainDes';
import Navbar from '../Components/Navbar';
import imgaa from '../Assests/kashh.jpg'
import Trip2 from '../Components/Trip2';
import Footer from '../Components/Footer';
function Service(){
    return(
    <>
        <Navbar></Navbar>
    <MainDes
    cName="hero_mid"
    heroImg={imgaa}
    title="Services"
    para="Visit Jammu & Kashmir Now!!"
    />
    <Trip2></Trip2>
    <Footer></Footer>
    </>
    )
}
export default Service;