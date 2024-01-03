import AboutSec from "./AboutSec/AboutSec";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";
import Facilities from "./Facilities/Facilities";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSec></AboutSec>
            <Facilities></Facilities>
            <Classes></Classes>
        </div>
    );
};

export default Home;