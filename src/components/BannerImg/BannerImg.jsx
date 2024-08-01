import Banner from "../../assets/images/bannerImg.jpg";
import Aos from "aos";


const BannerImg = () => {
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <img src={Banner} alt="BannerImg" className="h-[350px] bg-cover bg-center w-full"/>
        </div>
    );
};

export default BannerImg;