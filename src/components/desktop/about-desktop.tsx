import React from 'react'
import Image from 'next/image'
import { ABOUT_TEXT } from '@/constants'

export const AboutDesktop: React.FC = () => {
    return (<section id="about" className=''>
        <div className='flex justify-between bg-tertiary py-10  text-secondary'>

        <div className='flex flex-col px-20'>
            <h3 className='text-center text-secondary w-full mb-4 border-b border-secondary'>SOBRE</h3>
                <span className=' ml-4 text-justify'>
                {ABOUT_TEXT}
            </span>
                <span className=" text-center my-4">INSTITUIÇÕES ESCOLHIDAS PARA DOAÇÃO</span>
                <div className='flex items-center justify-center gap-12'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <Image
                            src="/ONGS/ong-1.png"
                            alt="ong-1"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <span className="text-center ">Sitio <br /> San Francesco</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <Image
                            src="/ONGS/ong-2.png"
                            alt="ong-2"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <span className="text-center ">Instituto <br /> Lenon Joel pela Paz</span>
                    </div>
                </div>
        </div>
        <Image
            className='mr-40 rounded-2xl'
            src="/class.jpg"
            alt="logo"
            width={567}
            height={567}
            />
        </div>
    </section>)
}