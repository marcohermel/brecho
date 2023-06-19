import Image from "next/image";
import { useEffect, useMemo, useState } from "react";


const INIT_INDEX = 1;
const TOTAL_IMAGES = 16;
const IMAGE_CHANGE_TIME = 5000;

const getProducts = () => {
    const producs: number[] = [];
    for (let index = INIT_INDEX; index <= TOTAL_IMAGES; index++) {
        producs.push(index);
    }
    return producs;
}


export const CarouselDesktop: React.FC = () => {
    const products: number[] = useMemo(() => getProducts(), []);
    const [currentItem, setCurrentItem] = useState<number>(INIT_INDEX);


    useEffect(() => {
        const timerId = setTimeout(() => handleNextClick(), IMAGE_CHANGE_TIME);
        return () => clearTimeout(timerId);
    }, [currentItem])


    const handlePreviousClick = () => {
        let value: number;
        if (currentItem === INIT_INDEX) {
            value = TOTAL_IMAGES;
        } else {
            value = currentItem - 1;
        }
        setCurrentItem(value);
    }

    const handleNextClick = () => {
        let value: number;
        if (currentItem === TOTAL_IMAGES) {
            value = INIT_INDEX;
        } else {
            value = currentItem + 1;
        }
        setCurrentItem(value);
    }

    return (<div style={{ height: '520px' }} id="default-carousel" className="relative w-full pt-10 bg-secondary" data-carousel="slide">
        <div className=" overflow-hidden rounded-lg flex justify-center items-center">
            {products.map((item: number) => {
                return (
                    <div className={`${currentItem === item ? "" : "hidden"} duration-700 ease-in-out pb-`} data-carousel-item>
                        <Image width={400} height={400} src={`/products/product-${item}.png`} className="rounded-md" alt="" />
                    </div>
                )
            })}
        </div>
        <div className="absolute  z-30 flex space-x-3 -translate-x-1/2 bottom-10 left-1/2">
            {products.map((item: number) => {
                return (<button type="button" onClick={() => setCurrentItem(item)} className={`${currentItem === item ? "bg-tertiary" : "bg-white"} w-3 h-3  rounded-full`}></button>)
            })}
        </div>
        <button type="button" onClick={() => handlePreviousClick()} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-tertiary/30 dark:bg-tertiary-800/30 group-hover:bg-tertiary/50 dark:group-hover:bg-gray-800/60  group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-tertiary sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" onClick={() => handleNextClick()} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-tertiary/30 dark:bg-tertiary-800/30 group-hover:bg-tertiary/50 dark:group-hover:bg-gray-800/60  group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-tertiary sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>);
}