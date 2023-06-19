import React from 'react'
import Image from 'next/image'

export const ProductsMobile: React.FC = () => {
    return (
        <section id='products' className='flex-col pt-8 pb-8 w-full bg-primary'>
            <div className="flex flex-col w-full items-center">
                <Image
                    src='/large-icons/shirt.svg'
                    alt="shirt"
                    width={120}
                    height={96}
                />
                <span className="text-secondary text-center mt-4">Roupas para você arrasar no seu estilo.</span>
            </div>
            <div className="flex flex-col w-full items-center mt-12">
                <Image
                    src='/large-icons/blouse.svg'
                    alt="shirt"
                    width={120}
                    height={96}
                />
                <span className="text-secondary text-center mt-4">Blusões e jaquetas para passar o inverno quentinho.</span>
            </div>
            <div className="flex flex-col w-full items-center mt-12">
                <Image
                    src='/large-icons/book.svg'
                    alt="shirt"
                    width={90}
                    height={103}
                />
                <span className="text-secondary text-center mt-4">Livros dos mais diversos. </span>
            </div>
            <div className="flex flex-col w-full items-center mt-12">
                <Image
                    src='/large-icons/bear.svg'
                    alt="shirt"
                    width={120}
                    height={96}
                />
                <span className="text-secondary text-center mt-4">Ursinhos e brinquedos para diversão.</span>
            </div>
        </section>
    );
}