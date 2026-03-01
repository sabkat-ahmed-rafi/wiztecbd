import { IoMdAdd } from "react-icons/io";

const Collaps = ({ title, description, isOpen, onToggle, multiDescription }) => {
    return (
        <div className={`${isOpen ? "border-divider" : "border-transparent"} text-primary border md:p-6 p-4 bg-secondary_bg cursor-pointer hover:scale-y-105 transition-transform duration-300`} onClick={onToggle}>
            <div className="flex items-center md:gap-4 gap-2">
                <span className={`transition-transform duration-500 transform ${isOpen ? "rotate-45" : "-rotate-90"}`}>
                    <IoMdAdd size={24} />
                </span>
                <h6 className="text-H6 font-medium">{title}</h6>
            </div>
            <div className={`transition-max-height ease-in-out duration-500 overflow-hidden ${isOpen ? " max-h-screen" : "max-h-0 "}`}>
                {description && <p className="text-subtitle2 mt-4">{description}</p>}
                {multiDescription && (
                    <div className=" mt-4">
                        {multiDescription.map((data) => (
                            <div key={data.id} className="flex md:items-center flex-col md:flex-row gap-2">
                                <span className="h-1.5 w-1.5 bg-primary rounded-full hidden md:inline-block"></span>
                                <p className="text-H6 font-medium">{data.title}</p>
                                <p className="text-subtitle2">{data.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Collaps;
