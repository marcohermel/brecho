
import Image from 'next/image'
import Link from 'next/link'

export const PageDesktop: React.FC = () => {

    return (<main >
        <nav className='flex w-screen p-4 align-middle justify-end bg-primary'>
            <Link className='mr-20  hover:bg-secondary' href='#teste'>HOME</Link>
            <Link className='mr-20  hover:bg-secondary' href='#teste'>SOBRE</Link>
            <Link className='mr-20  hover:bg-secondary' href='#teste'>PRODUTOS</Link>
            <Link className='mr-20  hover:bg-secondary' href='#teste'>EVENTOS</Link>
            <Link className='mr-20  hover:bg-secondary' href='#teste'>CONTATO</Link>
            <div className='pr-4'>|</div>
            <div className='pr-4'>
                <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={22}
                    height={22}
                />
            </div>
            <div>
                <Image
                    src="/whatsapp.svg"
                    alt="Whatsapp"
                    width={22}
                    height={22}
                />
            </div>
        </nav>
        <div>
            <Image
                src="/logo.jpg"
                alt="logo"
                width={567}
                height={567}
            />
        </div>
    </main>)
}