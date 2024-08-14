


const PlacesCard = ({place}) => {
  return (
    <div className="shadow-lg">
      <div>
        <div>
          <img  src={place.img} alt="placeImg" className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 "/>
        </div>
        <div>
          <h1 className="line-clamp-1 font-bold text-xl">{place.title}</h1>
          <div className="flex item-center justify-between border-t-2 !mt-3">
            <div className="opacity-70">
              <p>{place.type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">${place.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
