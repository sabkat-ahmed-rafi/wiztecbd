import React from "react";

const VacanciesTable = ({ name, vacancies, deadline }) => {
    return (
        <div className="p-2 md:p-4 bg-white border border-transparent gap-4 w-auto hover:border-success_main hover:shadow-input flex-col md:flex-row  font-medium flex md:items-center">
            <p className="md:w-3/5 ">{name}</p>
            <p className="md:w-1/5 ">Vacancies: {vacancies}</p>
            <p className="md:w-1/5 md:text-end ">Deadline: {deadline}</p>
        </div>
    );
};

export default VacanciesTable;
