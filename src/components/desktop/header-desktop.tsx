import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const onClick = (e: any, id: string) => {
    let hero = document.getElementById(id);
    e.preventDefault();
    hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(id, id, `/${id}`);
}

export const HeaderDesktop: React.FC = () => {
    return (<nav className='flex w-screen p-4 align-middle justify-end bg-secondary text-white'>
        <div className='flex gap-20 mx-10'>
            <Link className='hover:text-gold' onClick={e => onClick(e, 'home')} href='/'>HOME</Link>
            <Link className='hover:text-gold' onClick={e => onClick(e, 'about')} href='/'>SOBRE</Link>
            <Link className='hover:text-gold' onClick={e => onClick(e, 'products')} href='/'>PRODUTOS</Link>
            <Link className='hover:text-gold' onClick={e => onClick(e, 'events')} href='/'>EVENTOS</Link>
            <Link className='hover:text-gold' onClick={e => onClick(e, 'contact')} href='/'>CONTATO</Link>
        </div>

        <div className='px-4'>|</div>
        <Link href='https://www.instagram.com/_closet.do.bem/' className='pr-4'>
            <Image
                src="/instagram.svg"
                alt="Instagram"
                width={22}
                height={22}
            />
        </Link>
        <Link href='https://wa.me/5551999044949?text=Olá%20tudo%20bom?' className='cursor-pointer pr-4'>
            <Image
                src="/whatsapp.svg"
                alt="Whatsapp"
                width={22}
                height={22}
            />
        </Link>
    </nav>)
} 