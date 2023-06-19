
import { AboutDesktop } from '@/components/desktop/about-desktop'
import { CarouselDesktop } from '@/components/desktop/carousel-desktop'
import { ContactDesktop } from '@/components/desktop/contact-desktop'
import { EventsDesktop } from '@/components/desktop/events-desktop'
import { HeaderDesktop } from '@/components/desktop/header-desktop'
import { HomeDesktop } from '@/components/desktop/home-desktop'
import { ProductsDesktop } from '@/components/desktop/products-desktop'

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