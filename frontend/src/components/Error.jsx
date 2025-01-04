import React from 'react'
import { Link } from 'react-router-dom'
function Error() {

    return (
        
        <div className='flex items-center justify-center w-full h-screen' >
            <div>
            <h1 className='text-2xl'>4O4 page not found</h1>
            <Link to='/' ><p className='text-center border-solid border-orange-600 border-2 rounded-lg mt-4'>&larr; back to home</p></Link>
            </div>
        </div>
    )
    
}

export default Error