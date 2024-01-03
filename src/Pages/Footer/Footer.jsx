import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/gymlogo.png';
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
const Footer = () => {
    return (
        <div className='foot py-10 px-3'>
            <div className='container mx-auto grid gap-5 grid-cols-1 md:grid-cols-2'>
                <div className='w-full space-y-3'>
                    <img className='md:w-1/2 w-full' src={logo} alt="" />
                    <p>
                        Explore our diverse range of classes, embrace personalized training from our dedicated team of experts, and experience a gym where each member is celebrated for their unique journey. At VitalFlow, it is not just about lifting weights; it is about lifting spirits, breaking barriers, and discovering the vitality within.
                    </p>
                    <div className='flex gap-3'>
                        <Link to={'/'} className='h-9 w-9 bg-pink-200 hover:bg-pink-400 text-pink-500 hover:text-white duration-200 rounded-full flex justify-center items-center '>
                            <FaFacebookF className='text-2xl'></FaFacebookF>
                        </Link>
                        <Link to={'/'} className='h-9 w-9 bg-pink-200 hover:bg-pink-400 text-pink-500 hover:text-white duration-200 rounded-full flex justify-center items-center '>
                            <FaInstagram className='text-2xl'></FaInstagram>
                        </Link>
                        <Link to={'/'} className='h-9 w-9 bg-pink-200 hover:bg-pink-400 text-pink-500 hover:text-white duration-200 rounded-full flex justify-center items-center '>
                            <FaTwitter className='text-2xl'></FaTwitter>
                        </Link>
                        
                    </div>
                </div>
                <div className='self-center text-white grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-3'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Shedule</h2>
                        <p className='font-semibold'>Sunday-Thursday</p>
                        <p><span className='font-semibold'>Morning:</span> 9am - 12pm</p>
                        <p><span className='font-semibold'>Evening:</span> 4pm - 7pm</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Quick Link</h2>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/'}>About</Link></li>
                            <li><Link to={'/'}>Blog and Tips</Link></li>
                            <li><Link to={'/'}>Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Address</h2>
                        <p>Collage Road,</p>
                        <p>Kaligonj, Satkhira</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Contact</h2>
                        <div className='flex  gap-2'><FaPhone></FaPhone> <p>+88017771-000000</p></div>
                        <div className='flex  gap-2'><SiGmail></SiGmail> <p>vitalflow.gym@gmail.com</p></div>
                        <div className='flex  gap-2'><TbWorldWww></TbWorldWww> <p>www.vitalflow-gym.com</p></div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-5'>
                <hr />
                <p className='text-center'>Copywrite vitalflow-gym @2024</p>
            </div>
        </div>
    );
};

export default Footer;