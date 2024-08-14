

import PlacesCard from "../components/PlacesCard/PlacesCard";
import Img0 from "../assets/images/Img0.jpeg";
import Img1 from "../assets/images/Img1.jpeg";
import Img2 from "../assets/images/Img2.jpg";
import Img3 from "../assets/images/Img3.jpeg";
import Img4 from "../assets/images/Img4.jpg";
import Img5 from "../assets/images/Img5.jpg";
import Img6 from "../assets/images/Img6.jpg";
import Img7 from "../assets/images/Img7.jpeg";
import Img8 from "../assets/images/Colosseum_ Italy.jpg";
import Img9 from "../assets/images/Gardens_Singapore.jpg";
import Img10 from "../assets/images/Kathmondu.jpeg";
import Img11 from "../assets/images/Sikim-Lake.jpg";

const placesData = [
    {
        id: 1,
        img: Img0,
        title: "Masjid al-Haram",
        location: "Saudi Arabia",
        description: "Masjid al-Haram, the largest mosque in the world, surrounds the Kaaba in Mecca. It is the holiest site in Islam, where millions of Muslims perform Hajj and Umrah, making it central to Islamic worship and pilgrimage.",
        price: 2000,
        type: "Religious",
    },
    {
        id: 2,
        img: Img1,
        title: "Cox's Bazar",
        location: "Bangladesh",
        description: "Cox's Bazar in Bangladesh boasts the world's longest natural sea beach, stretching over 120 kilometers. Known for its golden sands and stunning sunsets, it’s a popular destination for tourists seeking sun, sea, and relaxation.",
        price: 2000,
        type: "Beaches",
    },
    {
        id: 3,
        img: Img2,
        title: "Sundarbans",
        location: "Bangladesh",
        description: "The Sundarbans, the world's largest mangrove forest, lies in Bangladesh and is renowned for its unique biodiversity, including Bengal tigers and diverse flora and fauna. It’s a UNESCO World Heritage site, crucial for conservation and ecological balance.",
        price: 2000,
        type: "Nature & Wildlife Areas",
    },
    {
        id: 4,
        img: Img3,
        title: "Sajek Valley",
        location: "Bangladesh",
        description: "Sajek Valley, nestled in the Chittagong Hill Tracts of Bangladesh, offers stunning panoramic views, lush green hills, and serene landscapes. Known as the 'Queen of Hills,' it’s a popular destination for nature lovers and adventure seekers.",
        price: 2000,
        type: "Mountains",
    },
    {
        id: 5,
        img: Img4,
        title: "Sreemangal",
        location: "Bangladesh",
        description: "Sreemangal, in Bangladesh’s Sylhet region, is known for its scenic tea gardens, lush green hills, and tranquil atmosphere. It’s a haven for nature lovers, offering beautiful landscapes, diverse wildlife, and a peaceful retreat.",
        price: 2000,
        type: "Beaches",
    },
    {
        id: 6,
        img: Img5,
        title: "Taj Mahal",
        location: "Agra, India",
        description: "The Taj Mahal in Agra, India, is an exquisite white marble mausoleum and a UNESCO World Heritage site. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it is celebrated for its stunning architecture and intricate details.",
        price: 2000,
        type: "Beaches",
    },
    {
        id: 7,
        img: Img6,
        title: "Cappadocia",
        location: "Turkey",
        description: "Cappadocia in Turkey is renowned for its unique rock formations, ancient cave dwellings, and hot air balloon rides over surreal landscapes. Its fairy chimneys and underground cities make it a captivating destination for travelers and adventurers.",
        price: 2000,
        type: "Beaches",
    },
    {
        id: 8,
        img: Img7,
        title: "Dubai",
        location:  "United Arab Emirates",
        description: "Dubai is a dazzling city in the UAE known for its futuristic skyline, luxury shopping, and vibrant nightlife. Iconic landmarks like the Burj Khalifa and artificial islands showcase its blend of modernity and tradition.",
        price: 2000,
        type: "Beaches",
    },
    {
        id: 9,
        img: Img8,
        title: "Colosseum",
        location:  "Italy",
        description: "The Colosseum, located in Rome, Italy, is an ancient amphitheater renowned for its gladiatorial contests and public spectacles. An iconic symbol of Roman engineering and history, it remains one of the most visited historical sites globally.",
        price: 2000,
        type: "Beaches",
    },
    {
        id: 10,
        img: Img9,
        title: "Gardens by the Bay",
        location:  "Singapore",
        description: "Gardens by the Bay is a futuristic park in Singapore, renowned for its iconic Supertree Grove, Cloud Forest, and Flower Dome. It combines stunning horticultural displays with innovative architecture, offering a unique urban garden experience.",
        price: 2000,
        type: "Beaches",
    },
    {
        id: 11,
        img: Img10,
        title: "Durbar Square",
        location:  "Kathmandu, Nepal",
        description: "Kathmandu Durbar Square is a historic plaza in Kathmandu, Nepal, featuring ancient palaces, temples, and courtyards. Known for its Newar architecture and cultural significance, it's a UNESCO World Heritage Site and a center of Nepalese heritage.",
        price: 2000,
        type: "Beaches",
    },
    {
        id: 12,
        img: Img11,
        title: "Sikkim",
        location:  "Northeast India",
        description: "Sikkim is a northeastern Indian state known for its stunning landscapes, including Mount Kanchenjunga, vibrant Buddhist culture, and rich biodiversity. Its capital, Gangtok, offers scenic beauty and diverse ethnic communities.",
        price: 2000,
        type: "Beaches",
    },
];

const BestPlaces = () => {
    return (
        <div className="bg-gray-50 py-10">
            <div className="container">
                <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl">
                    Best Places to Visit
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {placesData.map((place) => (
                        <PlacesCard key={place.id} place={place} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestPlaces;
