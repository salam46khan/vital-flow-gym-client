import './AboutSec.css';
import aboutImg from '../../../assets/aboutImg.jpg'
const AboutSec = () => {
    return (
        <div className="aboutSec">
            <div className='py-16 px-3 container mx-auto gap-5 grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='w-full' src={aboutImg} alt="" />
                </div>
                <div className='self-center'>
                    <h2 className='text-3xl font-bold'>About Us</h2>
                    <hr className='w-[200px] border-2 mb-5' />
                    <p>
                        At VitalFlow Gym, we believe in the transformative power of fitness. Step into a world where each drop of sweat, every beat of your heart, and every breath you take propels you towards vitality and strength. Welcome to a space where wellness meets community, and every workout becomes a celebration of your potential. <br />

                        Our state-of-the-art facilities, expert trainers, and a vibrant community create an environment that inspires, motivates, and empowers. Whether you are starting your fitness journey or pushing your limits, VitalFlow Gym is your partner in achieving your health and wellness goals. <br />

                        Explore our diverse range of classes, embrace personalized training from our dedicated team of experts, and experience a gym where each member is celebrated for their unique journey. At VitalFlow, it is not just about lifting weights; it is about lifting spirits, breaking barriers, and discovering the vitality within. <br />

                        Join us in sculpting a healthier, happier, and more vibrant version of yourself. Your journey to vitality starts here!
                    </p>
                    <button className='btn btn-secondary'>learn more</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;