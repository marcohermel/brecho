import React from 'react'
import Image from 'next/image'

export const HomeMobile: React.FC = () => {
    return (
        <section id='home' className='flex pt-20 pb-20 justify-center align-middle w-full'>
            <Image
                src="/logo.jpg"
                alt="logo"
                width={229}
                height={229}
            />
        </section>
    )
}