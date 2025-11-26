import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='font-[font-2] flex items-center justify-center gap-1 mb-0.5'>
            <Link
                className='text-[6vw] leading-[5.7vw] border-[0.2vw] border-white rounded-full px-2 pt-0.5 -pb-0.5 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'
                to="/projects"
            >
                Projects
            </Link>
            <Link
                className='text-[6vw] leading-[5.7vw] border-[0.2vw] border-white rounded-full px-2 pt-0.5 -pb-0.5 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'
                to="/agence"
            >
                Agence
            </Link>
        </div>
    )
}

export default HomeBottomText