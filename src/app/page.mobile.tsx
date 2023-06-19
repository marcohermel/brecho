
import React from "react";
import { HeaderMobile } from "@/components/mobile/header-mobile";
import { ProductsMobile } from "@/components/mobile/products-mobile";
import { AboutMobile } from "@/components/mobile/about-mobile";
import { EventsMobile } from "@/components/mobile/events-mobile";
import { ContactMobile } from "@/components/mobile/contact-mobile";
import { HomeMobile } from "@/components/mobile/home-mobile";


export const PageMobile: React.FC = () => {

    return (
        <main className='bg-tertiary'>
            <HeaderMobile />
            <HomeMobile />
            <ProductsMobile />
            <AboutMobile />
            <EventsMobile />
            <ContactMobile />
        </main >
    )
}