import Hero from "../components/Hero/Hero";
import videoBg from "../assets/video/water.mp4";

import BannerImg from "../components/BannerImg/BannerImg";
import Blogs from "./Blogs";
import BestPlaces from "./BestPlaces";
const Home = () => {
    return (
        <div>
            <div>
                <div className="relative lg:h-[700px] h-[500px]">
                    <video autoPlay loop muted 
                    className="absolute right-0 lg:h-[700px] h-[500px]  w-full object-cover z-[-1] bottom-0">
                        <source src={videoBg} type="video/mp4"/>
                    </video>
                    <Hero></Hero>
                    <BestPlaces></BestPlaces>
                    <BannerImg></BannerImg>
                    <Blogs></Blogs>
                </div>
            </div>
          
        </div>

        
    );
};

export default Home;