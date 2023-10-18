import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import MoreAbout from "../MoreAbout/MoreAbout";
import Service from "../Services/Service/Service";

function Home() {
    
    return(
        <div>
            <Banner></Banner>
            <Service></Service>
            <MoreAbout></MoreAbout>
            <Footer></Footer>
        </div>
    )
}

export default Home;