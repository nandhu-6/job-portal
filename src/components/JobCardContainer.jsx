import JobCard from './JobCard'
import amazon from '../assets/images/amazon.png'
import swiggy from '../assets/images/swiggy.png'
import tesla from '../assets/images/tesla.png'

function JobCardContainer(props) {

    const jobs = props.jobs
    const setJobs = props.setJobs
    return (<div className='flex flex-wrap gap-4 py-10 justify-center'>

        {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
        ))}

    </div>)
}

export default JobCardContainer