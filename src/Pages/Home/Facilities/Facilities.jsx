import SectionTitle from '../../../Components/SectionTitle';
import FacilityCard from '../../../Components/facilityCard';
import './Facilities.css'
const Facilities = () => {
    return (
        <div className="facility">
            <div className='py-16 px-3 container mx-auto'>
                <SectionTitle
                    header={'Facilities'}
                    title={'At VitalFlow Gym, we understand that an exceptional fitness journey requires the right environment and top-notch facilities.'}
                ></SectionTitle>
                <div className='mt-5 flex gap-5 flex-wrap justify-center'>
                    <FacilityCard></FacilityCard>
                    <FacilityCard></FacilityCard>
                    <FacilityCard></FacilityCard>
                    <FacilityCard></FacilityCard>
                    <FacilityCard></FacilityCard>
                    <FacilityCard></FacilityCard>
                    <FacilityCard></FacilityCard>
                    <FacilityCard></FacilityCard>
                </div>
            </div>
        </div>
    );
};

export default Facilities;