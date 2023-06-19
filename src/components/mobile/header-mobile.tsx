import { COLOR } from '@/constants';
import { useOutside } from '@/hooks/useOutsideClick';
import useWindowPosition from '@/hooks/useWindowPosition';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useRef, useState } from 'react'

export const HeaderMobile: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const scrollPosition: number = useWindowPosition();
    const iconSecondary = scrollPosition > 320 && scrollPosition < 1200;
    const menuSecondary = scrollPosition > 100 && scrollPosition < 1100;
    const ref = useRef(null)

    useOutside(ref, (e: Event) => {
        if (showMenu) {
            setShowMenu(false);
            e.preventDefault();
            e.stopPropagation();
        }
    });

    const onClick = (e: any, id: string) => {
        let hero = document.getElementById(id);
        e.preventDefault();
        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(id, id, `/${id}`);
        setShowMenu(false);
    }


    return (
        <div className='z-40'>
            <div className='flex justify-end bg-tertiary'>
                <FontAwesomeIcon
                    onClick={() => { setShowMenu(!showMenu) }}
                    size='2x'
                    className={`m-4 p-2 ${iconSecondary ? 'bg-secondary' : 'bg-primary'} z-30 rounded-sm fixed cursor-pointer`}
                    color={iconSecondary ? COLOR.PRIMARY : COLOR.SECONDARY}
                    icon={faBars}
                />
            </div>
            <nav ref={ref} className={`flex z-31 fixed w-full mt-20 px-4 ${menuSecondary ? 'text-primary' : 'text-secondary'} z-30  transition-all duration-200 ${showMenu ? "opacity-100" : "opacity-0"} `}>
                <ul className={`flex rounded-sm align-middle justify-center flex-col w-full py-2 ${menuSecondary ? 'bg-secondary' : 'bg-primary'}`}>
                    <li className='flex justify-center align-middle hover:bg-secondary hover:text-white'>
                        <Link className='py-2' onClick={e => onClick(e, 'home')} href='/'>HOME</Link>
                    </li>
                    <li className='flex justify-center align-middle hover:bg-secondary hover:text-white'>
                        <Link className='py-2' onClick={e => onClick(e, 'about')} href='/'>SOBRE</Link>
                    </li>
                    <li className='flex justify-center align-middle hover:bg-secondary hover:text-white'>
                        <Link className='py-2' onClick={e => onClick(e, 'products')} href='/'>PRODUTOS</Link>
                    </li>
                    <li className='flex justify-center align-middle hover:bg-secondary hover:text-white'>
                        <Link className='py-2' onClick={e => onClick(e, 'events')} href='/'>EVENTOS</Link>
                    </li>
                    <li className='flex justify-center align-middle hover:bg-secondary hover:text-white'>
                        <Link className='py-2' onClick={e => onClick(e, 'contact')} href='/'>CONTATO</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}