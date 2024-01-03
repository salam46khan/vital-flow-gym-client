
const FacilityCard = ({item}) => {
    const {image, facility} = item
    
    return (
        <div className='shadow-inner hover:shadow-[#fffc] shadow-white max-w-[320px] bg-[#fff5] p-3 text-center hover:scale-105 duration-200 hover:shadow-md rounded'>
            <img className="w-full" src={image} alt="" />

            <p className="text-xl font-bold mt-8">{facility}</p>
        </div>
    );
};

export default FacilityCard;