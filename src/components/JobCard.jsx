function JobCard({ logo, title, experience, location, salary }) {
    return (<div>
        <div className="rounded-2xl shadow-md p-4 w-[316px] h-[360px] bg-white" style={{ boxShadow: "0px 0px 14px 0px #D3D3D326" }}>
            {/* Company Logo */}
            <div className=" relative flex items-center space-x-3">
                <img src={logo} alt="Company Logo" className="w-[83.46px] h-[82px] rounded-[13.18px] border border-white bg-gradient-to-b from-[#FEFEFD] to-[#F1F1F1] p-2" style={{boxShadow: "0px 0px 10.25px 0px #94949440"}} />
                <span className=" absolute top-1 right-1 bg-[#B0D9FF] px-3 py-2 rounded-xl ">24h Ago</span>
            </div>

            {/* Job Title */}
            <h3 className="font-semibold text-xl mt-3 mb-3">{title}</h3>

            {/* Job Details */}
            <div className="text-gray-600 mt-1 flex gap-4">
                <p className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    {experience} Exp
                </p>

                <p className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                    {location}
                </p>

                <p className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                    </svg>
                    {salary} LPA
                </p>
            </div>

            {/* Job Description */}
            <ul className="text-gray-600 text-sm mt-4">
                <li><div className="flex gap-2"><span>&#x2022; </span> <span>A user-friendly interface lets you browse stunning photos and videos</span></div></li>
                <li><div className="flex gap-2"><span>&#x2022; </span> <span>Filter destinations based on interests and travel style, and create personalized</span></div></li>
            </ul>

            {/* Apply Button */}
            <button className="mt-5 w-full bg-[#00AAFF] text-white py-2 rounded-lg hover:bg-blue-600">
                Apply Now
            </button>
        </div>
    </div>)
}

export default JobCard