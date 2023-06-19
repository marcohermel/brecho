import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ContactDesktop: React.FC = () => {
    return (
        <section id="contact" className='bg-secondary pt-10 pb-4'>
            <div className='flex flex-col items-center justify-center px-20'>
                <h3 className='text-center text-white w-full  border-b border-white'>CONTATO</h3>
                <div className="flex items-center justify-around pt-4 pb-4 w-full pl-8  bg-secondary">
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


                </div>
                <Link className='py-2' href='https://wa.me/5551999044949?text=Olá%20tudo%20bom?'> <Image
                    src="/whatsapp-green.svg"
                    alt="Whatsapp"
                    width={40}
                    height={40}
                    className="fixed bottom-4 right-4"
                /></Link>
            </div>
            <div className="pt-4 justify-center text-center text-gold">
                Venha conosco se vestir bem e espalhar o bem!
            </div>
        </section>
    )
}