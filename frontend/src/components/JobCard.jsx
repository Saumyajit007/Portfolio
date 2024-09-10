import React from 'react'

function JobCard({companyName,role,description}) {
  return (
    <div className='min-h-[170px] min-w-[300px] max-h-[170px] max-w-[600px]  mt-4 shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset] rounded-2xl hover:scale-105 hover:shadow-[0px_20px_30px_-10px_rgba(38,57,77,1)]'>
      <h2 className='text-center text-xl font-semibold'>{companyName}</h2>
      <h2 className='px-2'><span className='text-lg font-medium'>Role : </span>{role}</h2>
      <p className='text-wrap px-2'><span className='text-lg font-medium'>Description : </span>{description}</p>
    </div>
  )
}

export default JobCard
