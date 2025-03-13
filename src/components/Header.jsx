import React from "react";
import NavBar from "./NavBar";
import JobSearch from "./JobSearch";

function Header(props){
    const jobs = props.jobs
    const setJobs = props.setJobs

    return (<div className="w-full bg-white px-6 py-4"style={{boxShadow: "0px 0px 14px 0px #C6BFBF40",}} >
        <NavBar jobs={jobs} setJobs = {setJobs}/>
        <JobSearch/>
    </div>)
}

export default Header