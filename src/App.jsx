import { useState } from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import Header from './components/Header'
import JobCardContainer from './components/JobCardContainer'
import CreateJob from './components/CreateJob'
import amazon from './assets/images/amazon.png'
import swiggy from './assets/images/swiggy.png'
import tesla from './assets/images/tesla.png'

function App() {

  const defaultJobs = [
    { logo: amazon, title: "Full Stack Developer", experience: "1-3 yr", location: "Onsite", salary: "12" },
    { logo: tesla, title: "Node Js Developer", experience: "1-3 yr", location: "Onsite", salary: "12" },
    { logo: swiggy, title: "UX/UI Designer", experience: "1-3 yr", location: "Onsite", salary: "12" },
    { logo: amazon, title: "Full Stack Developer", experience: "1-3 yr", location: "Onsite", salary: "12" },
    { logo: tesla, title: "Node Js Developer", experience: "1-3 yr", location: "Onsite", salary: "12" },
    { logo: swiggy, title: "UX/UI Designer", experience: "1-3 yr", location: "Onsite", salary: "12" },
    { logo: amazon, title: "Full Stack Developer", experience: "1-3 yr", location: "Onsite", salary: "12" },
    { logo: tesla, title: "Node Js Developer", experience: "1-3 yr", location: "Onsite", salary: "12" },
  ];

  const [jobs, setJobs] = useState(defaultJobs);

  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  return (
    <div>
      <Header jobs={jobs} setJobs={setJobs}/>
      <JobCardContainer jobs={jobs} setJobs={setJobs}/>
    </div>
  )
}

export default App
