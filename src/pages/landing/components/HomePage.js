// HomePage.js

import Footer from "./footer";
import Offer from "./offer";
import Loginpart from "./loginpart";
import ImageSlider from "./imageslider";

function HomePage() {
    return (
        <div className="bg-black ">
            <Loginpart />
            <ImageSlider/>
            <Offer />
            <Footer />
        </div>
    );
  
}

export { Loginpart, ImageSlider, Offer, Footer }; 

export default HomePage; 
