import React from 'react'
import Image from "next/image";
import { ABOUT_TEXT } from '@/constants';

export const AboutMobile: React.FC = () => {
    return (<section id="about" className='flex flex-col  w-full items-center bg-tertiary'>
        <h2 className="text-secondary py-4">SOBRE</h2>
        <div className="flex flex-col pt-4 pb-4 w-full items-center bg-secondary">
            <Image
                src="/class.jpg"
                alt="turma"
                width={368}
                height={223}
            />
            <span className="text-white text-center my-4">{ABOUT_TEXT}</span>
        </div>
    </section>
    );
}