import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className="main-container font-[font-1] pt-2 text-center">
            <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
                L'étincelle
            </div>
            <div className='text-[9.5vw] uppercase leading-[8vw] flex items-start justify-center'>
                qui
                <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'>
                    <Video />
                </div>
                génère
            </div>
            <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText