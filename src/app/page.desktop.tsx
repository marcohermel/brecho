
import { ABOUT_TEXT, COLOR, GOOGLE_MAPS_EVENT_1_URL } from '@/constants'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export const PageDesktop: React.FC = () => {

    const onClick = (e: any, id: string) => {
        let hero = document.getElementById(id);
        e.preventDefault();
        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(id, id, `/${id}`);
    }

    return (<main >
        <nav className='flex w-screen p-4 align-middle justify-end bg-secondary text-primary'>
            <div className='flex gap-20 mx-10'>
                <Link className='hover:text-white' onClick={e => onClick(e, 'home')} href='/'>HOME</Link>
                <Link className='hover:text-white' onClick={e => onClick(e, 'products')} href='/'>SOBRE</Link>
                <Link className='hover:text-white' onClick={e => onClick(e, 'about')} href='/'>PRODUTOS</Link>
                <Link className='hover:text-white' onClick={e => onClick(e, 'events')} href='/'>EVENTOS</Link>
                <Link className='hover:text-white' onClick={e => onClick(e, 'contact')} href='/'>CONTATO</Link>
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
        </nav>
        <section id="home" className='flex justify-between bg-tertiary py-20'>
            <div className='flex justify-center w-full items-center'>
                <span className='text-secondary text-3xl font-asul'>
                    VENHA CONOSCO<br /> SE VESTIR BEM<br /> E ESPALHAR O BEM!
                </span>
            </div>
            <Image
                className='mr-40'
                src="/logo.jpg"
                alt="logo"
                width={567}
                height={567}
            />
        </section>
        <section id="products" className='h-50 w-full bg-primary flex justify-around align-baseline py-8'>
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
        </section>
        <section id="about" className='flex justify-between bg-secondary py-10'>
            <div className='flex flex-col px-20'>
                <h3 className='text-center text-white w-full mb-4 border-b border-white'>SOBRE</h3>
                <span className='text-white ml-4 text-center '>
                    {ABOUT_TEXT}
                </span>
            </div>
            <Image
                className='mr-40 rounded-2xl'
                src="/class.jpg"
                alt="logo"
                width={567}
                height={567}
            />
        </section>
        <section id="events" className='flex  text-secondary  bg-tertiary py-10'>
            <div className='flex flex-col px-20'>
                <h3 className='text-center text-secondary w-full mb-4 border-b border-secondary'>EVENTOS</h3>
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
            </div>
            <div className='flex px-20'>
                <iframe src={GOOGLE_MAPS_EVENT_1_URL} width="700" height="500" loading="lazy" />
            </div>
        </section>
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
    </main>)
}