
const SectionTitle = ({header, title}) => {
    return (
        <div className="w-full text-center">
            <h2 className="font-bold text-3xl">{header}</h2>
            <hr className="w-[200px] mx-auto border-2"/>
            <p className="w-full md:w-1/2 mt-5 mx-auto">{title}</p>
        </div>
    );
};

export default SectionTitle;