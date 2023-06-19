import React from 'react'
import Image from 'next/image'

export const HomeDesktop: React.FC = () => {
    return (
        <section id="home" className='flex justify-between bg-tertiary py-20'>
            <div className='flex justify-center w-full items-center'>
                <span className='text-secondary text-3xl font-asul'>
                    VENHA CONOSCO<br /> SE VESTIR BEM<br /> E ESPALHAR O BEM!
                </span>
            </div>
            <Image
                className='mr-40'
                src="/logo.jpg"
                alt="logo"
                width={567}
                height={567}
            />
        </section>)
}