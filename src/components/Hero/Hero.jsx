import videoBg from "../../assets/video/water.mp4";

const Hero = () => {
    return (
        <div>
            <div className="relative h-screen">
                <video autoPlay loop muted 
                className="absolute right-0 h-screen w-full object-cover z-[-1] bottom-0">
                    <source src={videoBg} type="video/mp4"/>
                </video>
            </div>
        </div>
    );
};

export default Hero;