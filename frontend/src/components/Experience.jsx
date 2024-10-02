import React from 'react'
import JobCard from './JobCard'
function Experience() {
    const jobs=[
        {
            companyname:"Bharat Engineering",
            role:"Lathe Operator/turner",
            description:"responsible product design in AutoCad for turnning, milling, drilling operation etc."
        },
        {
            companyname:"Score Infromation Technologies LTD.",
            role:"AutoCad Draftsman",
            description:"responsible Schematic and Layout design for CCTV, LAN, & PA system"
        },
        {
            companyname:"Texnix (AxisDelta)",
            role:"Fullstack devoloper intern",
            description:"I worked with Professional developers in real time projects based on MERN Stack"
        }
    ];

    return (
        <div className='pt-16 sm:pt-20 min-w-[100vw]'>
            <h1 className='text-5xl font-semibold text-center'>Experience</h1>
            <div className='flex flex-col items-center'>
                {
                    jobs.map((job,index)=>{
                       return <JobCard key={index} companyName={job.companyname} role={job.role} description={job.description}/>
                    })
                }
            </div>
        </div>
    )
}

export default Experience
