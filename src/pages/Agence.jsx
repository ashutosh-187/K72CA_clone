import React from 'react'

const Agence = () => {
    return (
        <div className='font-[font-2]'>
            <div className='absolute top-11 left-[30vw] h-[20vw] w-[15vw] bg-red-400 rounded-[2vw] overflow-hidden'>
                <img
                    className='w-full h-full object-cover'
                    src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" />
            </div>
            <div className=' relative mt-[27.5vw]'>
                <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>
                    Soixan7e
                    <br />
                    Douze
                </h1>
            </div>
            <div className='pl-[50%] w-full pr-1 text-start'>
                <p
                    className='text-[2.1vw] mt-2'
                >
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
                </p>
            </div>
        </div>
    )
}

export default Agence