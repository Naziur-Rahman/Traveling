import PropTypes from 'prop-types';
import { IoLocateSharp } from "react-icons/io5";

const PlacesCard = ({ img, title, location,description,price,type}) => {
  return (
    <div className="shadow-lg">
      <div>
        <div>
          <img  src={img} alt="placeImg" className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"/>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
