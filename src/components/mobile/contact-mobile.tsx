import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const ContactMobile: React.FC = () => {
    return (
        <section id='contact' className='flex flex-col  w-full items-center  bg-primary'>
            <h2 className="text-secondary py-4">CONTATO</h2>
            <div className="flex flex-col pt-4 pb-4 w-full pl-8  bg-secondary">
                <div className='py-4 flex items-center'>
                    <Image
                        src="/whatsapp.svg"
                        alt="Whatsapp"
                        width={22}
                        height={22}
                    />
                    <span className="ml-2">(51)9 9904-4949</span>
                </div>
                <div className='py-4 flex items-center'>
                    <Image
                        src="/instagram.svg"
                        alt="Instagram"
                        width={22}
                        height={22}
                    />
                    <span className="ml-2">@_closet.do.bem</span>
                </div>

                <span className="py-4">www.closetdobem.com.br</span>
                <div className="pt-8 justify-center text-center text-gold">
                    Venha conosco <br /> se vestir bem e espalhar o bem!
                </div>
                <Link className='py-2' href='https://wa.me/5551999044949?text=Olá%20tudo%20bom?%20Gostei%20de%20uma%20peça%20e%20gostaria%20de%20ajudar.'> <Image
                    src="/whatsapp-green.svg"
                    alt="Whatsapp"
                    width={40}
                    height={40}
                    className="fixed bottom-4 right-4"
                /></Link>
            </div>
        </section>
    );
}