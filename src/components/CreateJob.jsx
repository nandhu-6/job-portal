import React, { useState } from "react";
import swiggy from '../assets/images/swiggy.png'


const CreateJob = (props) => {
    const jobs = props.jobs
    const setJobs = props.setJobs
    const setShowCreateJob = props.setShowCreateJob


    const [formData, setFormData] = useState({
        logo:swiggy,
        title: "",
        experience: "",
        location: "",
        salary: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Job posted successfully:", formData);
        setJobs([...jobs, formData])
        alert("Job Posted Successfully!");
        setShowCreateJob(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/45 backdrop z-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-180">

                <h2 className="text-xl font-semibold text-center mb-6">Create Job Opening</h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between gap-3 mb-3">
                        <div className="w-full">
                            <label className="text-[#636363] font-medium">Job Title</label>
                            <input placeholder="Full Stack Developer" type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 pl-3 border border-[#bcbcbc] rounded-lg h-14" />
                        </div>

                        <div className="w-full">
                            <label className="text-[#636363] font-medium">Company Name</label>
                            <input placeholder="Amazon, Microsoft, Swiggy" type="text" /*value={formData.companyName}*/ onChange={handleChange} className="w-full p-2 pl-3 border border-[#bcbcbc] rounded-lg h-14" />
                        </div>
                    </div>

                    <div className="flex justify-between gap-3 mb-3">
                        <div className="w-full">
                            <label className="text-[#636363] font-medium">Location</label>
                            <input placeholder="Choose Preferred Location" type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 pl-3 border border-[#bcbcbc] rounded-lg h-14" />
                        </div>

                        <div className="w-full">
                            <label className="text-[#636363] font-medium">Job Type</label>
                            <select onChange={handleChange} className="w-full p-2 border border-[#bcbcbc] text-[#7F7F7F] rounded-lg h-14">
                                <option value="FullTime">FullTime</option>
                                <option value="PartTime">Part-Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between gap-3 mb-3">
                        <div className="w-full">
                            <label className="text-[#636363] font-medium">Salary Range</label>
                            <div className="flex gap-2">
                            <input placeholder="&#8593;&#8595;  &#8377; 0" type="text" className="w-full p-2 pl-3 border border-[#bcbcbc] rounded-lg h-14" />
                            <input placeholder="&#8593;&#8595;  &#8377; 12,00,000" type="text" name="salary" value={formData.salary} onChange={handleChange} className="w-full p-2 pl-3 border border-[#bcbcbc] rounded-lg h-14" />

                            </div>
                        </div>

                        <div className="w-full">
                            <label className="text-[#636363] font-medium">Application Deadline</label>
                            <input type="date" onChange={handleChange} className="w-full p-2 border border-[#bcbcbc] rounded-lg h-14"/>
                        </div>
                    </div>



                    <div className="mb-3">
                        <label className="text-[#636363] font-medium">Job Description</label>
                        <textarea placeholder="Please share a description to let the candidate know more about the job role" onChange={handleChange} className="w-full p-2 pl-3 border border-[#bcbcbc] rounded-xl" rows="4"></textarea>
                    </div>

                    <div className="flex justify-between">
                        <button type="button" className="px-4 py-2 h-14 w-56 border border-black rounded-xl">Save Draft </button>
                        <button type="submit" className="px-4 py-2 h-14 w-56 bg-[#00AAFF] text-white rounded-xl">Publish</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateJob;
