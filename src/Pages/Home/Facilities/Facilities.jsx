import { useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import FacilityCard from '../../../Components/facilityCard';
import './Facilities.css'
const Facilities = () => {
    const [facility, setFacility] = useState([])
    fetch('facility.json')
    .then(res=> res.json())
    .then(data => setFacility(data))
    return (
        <div className="facility">
            <div className='py-16 px-3 container mx-auto'>
                <SectionTitle
                    header={'Facilities'}
                    title={'At VitalFlow Gym, we understand that an exceptional fitness journey requires the right environment and top-notch facilities.'}
                ></SectionTitle>
                <div className='mt-5 flex gap-6 flex-wrap justify-center'>
                    {
                        facility.map(item => <FacilityCard key={item._id} item={item}></FacilityCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Facilities;