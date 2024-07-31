
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect, useState } from 'react';


const Hero = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    

      const [priceValue, setPriceValue] = useState(150);
      
    return (
        <div className="bg-black/20 h-full">
            <div className="h-full flex justify-center items-center p-4 bg-primary/10">
                <div className="container grid grid-cols-1 gap-4 ">
                    {/* Text content section */}
                <div className="text-white">
                    <p data-aos="fade-up">Our packages</p>
                    <p data-aos="fade-up" data-aos-deley="350" className="font-bold text-3xl">Search Your Destination</p>
                </div>
                {/* From section  */}
                    <div className='space-y-4 bg-white rounded-md p-4 relative'  data-aos="fade-up" data-aos-delay="450">
                        <div className='grid grid-cols-1 sm:grid-cols-3 py-3 gap-2 ' >
                            <div>
                                <label htmlFor='destination' className='opacity-70'>Search Your Destination</label>
                                <input type="text"
                                name='destination'
                                id='destination'
                                placeholder='Sajek'
                                className='w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-[1.3rem]' />
                            </div>
                            <div>
                                <label htmlFor="destination" className='opacity-70'>
                                    Date
                                </label>
                                <input type="date" name='destination' id='destination' className='w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline-1 p-2'
                                />
                            </div>
                            <div>
                                <label htmlFor="destination" className='opacity-70 block'>
                                    <div className='w-full flex justify-between items-center mb-2'>
                                        <p>Max Price</p>
                                        <p>${priceValue}</p>
                                    </div>
                                </label>
                                <div className='bg-gray-100 rounded-full w-full items-center justify-center p-2'>
                                    <input type="range"
                                    name='destination'
                                    id='destination'
                                    className='appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2 ' min={150} max={1000} value={priceValue} step={10} onChange={(e)=> setPriceValue(e.target.value)}/>

                                </div>
                            </div>
                            <div>
                                <button className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:scale-105 px-4 duration-200 text-white  py-2 rounded-full absolute -bottom-5 left-1/2 -translate-x-1/2' >
                                    Search Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;