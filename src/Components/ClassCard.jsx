import tik from '../assets/tik.png'
const ClassCard = ({item}) => {
    const {time, classes, instructor_name, instructor_img, description, Benefits} = item;
    // console.log(item);
    return (
        <div className=" p-3 rounded max-w-[360px] bg-[#fff5] hover:-translate-y-2 duration-200 hover:bg[#fff8] hover:shadow-[#fff9] hover:shadow-xl">
            <img src="https://i.ibb.co/k61QmdH/Group-Exercise-Studios.jpg" alt="" />
            <div className='mt-4 space-y-2'>
                <h2 className='font-bold text-3xl text-pink-500'>{classes}</h2>
                <p><span className='font-bold'>Time:</span> {time}</p>
                <div>
                    <div className="flex gap-3 items-center bg-gradient-to-r from-pink-500 to-[#0000] p-2">
                        <img className="w-12 rounded-full" src={instructor_img} alt="" />
                        <div>
                            <p>{instructor_name}</p>
                            <p className='text-sm'>Instructor</p>
                        </div>
                    </div>


                </div>
                <p>
                    {description}
                </p>
                <h3 className='font-bold'>Benefite</h3>
                <div>
                    {
                        Benefits.map((item, index)=> <div key={index} className='flex gap-2 items-center'>
                        <img className='h-6' src={tik} alt="" />
                        <p>{item}</p>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassCard;