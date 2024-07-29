
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';


const Hero = () => {
    useEffect(() => {
        AOS.init();
      }, []);
      
    return (
        <div className="bg-black/20 h-full">
            <div className="h-full flex justify-center items-center p-4 bg-primary/10">
                <div className="container grid grid-cols-1 gap-4 ">
                    {/* Text content section */}
                <div className="text-white">
                    <p data-aos="fade-up">Our packages</p>
                    <p data-aos="fade-up" data-aos-deley="300" className="font-bold text-3xl">Search Your Destination</p>
                </div>
                {/* From section  */}
                    <div className='space-y-4 bg-white rounded-md p-4 relative'>
                    <div className='grid '>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;