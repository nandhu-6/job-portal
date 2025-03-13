import JobCard from './JobCard'

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