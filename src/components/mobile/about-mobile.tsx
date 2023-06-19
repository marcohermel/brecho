import React from 'react'
import Image from "next/image";
import { ABOUT_TEXT } from '@/constants';

export const AboutMobile: React.FC = () => {
    return (
        <section id="about" className='flex flex-col w-full items-center bg-tertiary'>
        <h2 className="text-secondary py-4">SOBRE</h2>
        <div className="flex flex-col pt-4 pb-4 w-full items-center bg-secondary">
            <Image
                src="/class.jpg"
                alt="turma"
                width={368}
                height={223}
            />
                <span className="text-white text-justify mx-2 my-4 mb-10">{ABOUT_TEXT}</span>

                <span className="text-white text-center my-4 mb-10">INSTITUIÇÕES ESCOLHIDAS PARA DOAÇÃO</span>
                <div className='flex items-center justify-between gap-12'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <Image
                            src="/ONGS/ong-1.png"
                            alt="ong-1"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <span className="text-center">Sitio <br /> San Francesco</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <Image
                            src="/ONGS/ong-2.png"
                            alt="ong-2"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <span className="text-center">Instituto <br /> Lenon Joel pela Paz</span>
                    </div>
                </div>
            </div>
    </section>
    );
}