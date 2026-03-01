import Link from "next/link";

const Dropdown = ({ options, onMouseEnter, onMouseLeave }) => {
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="absolute top-24  inset-x-3/5 z-50">
            <div className=" w-48 bg-white text-primary rounded-md shadow-lg py-2 flex flex-col z-50">
                {options.map((option, index) => (
                    <Link href={`${option.url}`} key={index} className="cursor-pointer px-5 py-1" onClick={onMouseLeave}>
                        {option.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
