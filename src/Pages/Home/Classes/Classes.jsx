import { useState } from "react";
import ClassCard from "../../../Components/ClassCard";
import SectionTitle from "../../../Components/SectionTitle";
import './Classes.css'
const Classes = () => {
    const [classes, setClasses] = useState([])
    fetch('classes.json')
    .then(res => res.json())
    .then(data => setClasses(data))

    // console.log(classes);
    return (
        <div className="class">
            <div className="container mx-auto py-16 px-3">
                <SectionTitle title={'At VitalFlow Gym, we believe that fitness is not just a routine; it is a journey of self-discovery and empowermen'} header={'Classes'}></SectionTitle>
                <div className="mt-10 flex justify-center gap-8 flex-wrap">
                    {
                        classes.map(item => <ClassCard key={item.id} item={item}></ClassCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Classes;