import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import CreateJob from "./CreateJob";

const NavBar = (props) => {
  const jobs = props.jobs
  const setJobs = props.setJobs
  const [showCreateJob, setShowCreateJob] = useState(false);

  return (
    <>
      <nav className="w-[890px] h-[80px] mx-auto rounded-[122px] border border-[#FCFCFC] flex items-center px-6 justify-between bg-white"
        style={{ boxShadow: "0px 0px 20px 0px #7F7F7F26" }}>

        <div className="w-[48px] h-[48px]">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        <ul className="w-153 flex items-center justify-between">
          <li className="text-[16px] font-semibold px-4 py-2 rounded-lg">Homee</li>
          <li className="text-[16px] font-semibold px-4 py-2 rounded-lg">Find Jobs</li>
          <li className="text-[16px] font-semibold px-4 py-2 rounded-lg">Find Talents</li>
          <li className="text-[16px] font-semibold px-4 py-2 rounded-lg">About us</li>
          <li className="text-[16px] font-semibold px-4 py-2 rounded-lg">Testimonials</li>
        </ul>

        <button
          className="w-[123px] h-[38px] rounded-[30px] px-2 py-2 text-[16px] text-white cursor-pointer"
          style={{ background: "linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)" }}
          onClick={() => setShowCreateJob(true)} 
        >
          Create Jobs
        </button>
      </nav>

      {/* Show CreateJob modal when state is true */}
      {showCreateJob && <CreateJob jobs={jobs} setJobs={setJobs} setShowCreateJob={setShowCreateJob} />}
    </>
  );
};

export default NavBar;
