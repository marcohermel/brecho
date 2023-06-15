import { ABOUT_TEXT, COLOR, GOOGLE_MAPS_EVENT_1_URL } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from 'next/image'
import { useOutside } from "@/hooks/useOutsideClick";
import useWindowPosition from "@/hooks/useWindowPosition";


export const PageMobile: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const ref = useRef(null)
    useOutside(ref, (e: Event) => {
        if (showMenu) {
            setShowMenu(false);
            e.preventDefault();
            e.stopPropagation();
        }
    });
    const scrollPosition: number = useWindowPosition();
    const iconSecondary = scrollPosition > 320 && scrollPosition < 1200;
    const menuSecondary = scrollPosition > 100 && scrollPosition < 1100;


    const onClick = (e: any, id: string) => {
        let hero = document.getElementById(id);
        e.preventDefault();
        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(id, id, `/${id}`);
        setShowMenu(false);
    }


    return (<main className='bg-tertiary'>
        <div className='flex justify-end'>
            <FontAwesomeIcon
                onClick={() => { setShowMenu(!showMenu) }}
                size='2x'
                className={`m-4 p-2 ${iconSecondary ? 'bg-secondary' : 'bg-primary'} rounded-sm fixed cursor-pointer`}
                color={iconSecondary ? COLOR.PRIMARY : COLOR.SECONDARY}
                icon={faBars}
            />
        </div>
        <nav ref={ref} className={`flex fixed w-full mt-20 px-4 ${menuSecondary ? 'text-primary' : 'text-secondary'}  transition-all duration-200 ${showMenu ? "opacity-100" : "opacity-0"} `}>
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

        <section id='home' className='flex pt-20 pb-20 justify-center align-middle w-full'>
            <Image
                src="/logo.jpg"
                alt="logo"
                width={229}
                height={229}
            />
        </section>
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
        <section id="about" className='flex flex-col  w-full items-center bg-tertiary'>
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
        <section id='events' className='flex flex-col  text-secondary w-full items-center  bg-blackSecondary'>
            <h2 className="text-tertiary py-4">EVENTOS</h2>
            <div className="flex flex-col pt-4 pb-4 w-full items-center bg-tertiary">
                <div className="flex flex-col pl-4 pb-4">
                    <div className="flex items-baseline">
                        <FontAwesomeIcon
                            size='1x'
                            color={COLOR.SECONDARY}
                            icon={faCalendar}
                        />
                        <h4 className="ml-4 mb-2 font-bold">Brechó Presencial:</h4>
                    </div>
                    <div>
                        <span className="font-bold">Data: </span>
                        <span>10/06/2023</span>
                    </div>
                    <div>
                        <span className="font-bold">Hora: </span>
                        <span>09:00</span>
                    </div>
                    <div>
                        <span className="font-bold">Cidade: </span>
                        <span>Canoas/RS</span>
                    </div>
                    <div>
                        <span className="font-bold">Endereço: </span>
                        <span>R. Florianópolis, 2855, Mathias Velho</span>
                    </div>
                </div>
                <iframe src={GOOGLE_MAPS_EVENT_1_URL} width="362" height="262" loading="lazy" />
            </div>
        </section>
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
                <Link className='py-2' href='https://wa.me/5551999044949?text=Olá%20tudo%20bom?'> <Image
                    src="/whatsapp-green.svg"
                    alt="Whatsapp"
                    width={40}
                    height={40}
                    className="fixed bottom-4 right-4"
                /></Link>
            </div>
        </section>
    </main >)
}