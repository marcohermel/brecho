
import { AboutDesktop } from '@/components/about-desktop'
import { CarouselDesktop } from '@/components/carousel-desktop'
import { ContactDesktop } from '@/components/contact-desktop'
import { EventsDesktop } from '@/components/events-desktop'
import { HeaderDesktop } from '@/components/header-desktop'
import { HomeDesktop } from '@/components/home-desktop'
import { ProductsDesktop } from '@/components/products-desktop'

export const PageDesktop: React.FC = () => {



    return (<main >
        <HeaderDesktop />
        <HomeDesktop />
        <ProductsDesktop />
        <AboutDesktop />
        <EventsDesktop />
        <ContactDesktop />
    </main>)
}