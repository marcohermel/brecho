import React from 'react'
import Image from 'next/image'
import { Carousel } from '../carousel'

export const ProductsDesktop: React.FC = () => {

    return (
        <section id="products" className='flex flex-col  bg-primary align-baseline '>
            <div className='flex  py-8 justify-around'>
                <div className="flex flex-col items-center">
                    <Image
                        src='/large-icons/shirt.svg'
                        alt="shirt"
                        width={120}
                        height={96}
                    />
                    <span className="text-secondary text-center  mt-4">Roupas para você arrasar no seu estilo.</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src='/large-icons/blouse.svg'
                        alt="shirt"
                        width={120}
                        height={96}
                    />
                    <span className="text-secondary text-center  mt-4">Blusões e jaquetas para passar o inverno quentinho.</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src='/large-icons/book.svg'
                        alt="shirt"
                        width={90}
                        height={103}
                    />
                    <span className="text-secondary text-center mt-4">Livros dos mais diversos. </span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src='/large-icons/bear.svg'
                        alt="shirt"
                        width={120}
                        height={96}
                    />
                    <span className="text-secondary text-center mt-4">Ursinhos e brinquedos para diversão.</span>
                </div>
            </div>
            <div>
                <Carousel />
            </div>
        </section>

    )
}