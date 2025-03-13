import React from "react";

function JobSearch() {
    return (
        <div className="flex justify-between items-center mt-8 px-6 w-full">
            {/* Search Field */}
            <div className="flex items-center gap-7 border-r-2 border-[#EAEAEA] pr-6 py-2 w-1/4">
                <i className="fa-solid fa-search text-gray-500 text-lg"></i>
                <input type="text" placeholder="Search By Job Title, Role" className=" w-full outline-none placeholder-[#686868]" />
            </div>

            {/* Location Field */}
            <div className="flex items-center gap-7 border-r-2 border-[#EAEAEA] pr-6 py-2 w-1/4">
               
                <svg className=" text-gray-500 text-lg size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                <input type="text" placeholder="Preferred Location" className=" w-full outline-none placeholder-[#686868]" />
            </div>

            {/* Job Type Dropdown */}
            <div className="flex items-center gap-7 border-r-2 border-[#EAEAEA] pr-6 py-2 w-1/5">
                <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#6A7282"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <g id="User / User_Voice"> <path id="Vector" d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M16.8281 5.17188C17.1996 5.54331 17.4942 5.98427 17.6952 6.46957C17.8962 6.95487 17.9999 7.47533 17.9999 8.00062C17.9999 8.52591 17.8963 9.04497 17.6953 9.53027C17.4943 10.0156 17.1996 10.457 16.8281 10.8285M19 3C19.6566 3.65661 20.1775 4.43612 20.5328 5.29402C20.8882 6.15192 21.0718 7.07127 21.0718 7.99985C21.0718 8.92844 20.8886 9.84815 20.5332 10.7061C20.1778 11.564 19.6566 12.3435 19 13.0001M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z" stroke="#6A7282" stroke-width="1.224" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                <select className="text-[#686868] w-full outline-none">
                    <option>Job Type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                </select>
            </div>

            {/* Salary Range Slider */}
            <div className="flex flex-col items-start w-1/4 px-8 pb-2">
                <div className="flex justify-between w-full text-black font-semibold mb-2">
                    <span>Salary Per Month</span>
                    <span>₹50k - ₹80k</span>
                </div>
                <input type="range" className="cursor-pointer w-full h-[2px] rounded-lg mt-2" />
            </div>
        </div>
    );
}

export default JobSearch;