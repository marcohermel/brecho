import { COLOR, GOOGLE_MAPS_EVENT_1_URL } from '@/constants'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const EventsDesktop: React.FC = () => {
    return (<section id="events" className='flex justify-center  text-tertiary  bg-secondary py-10'>
        <div className='flex flex-col px-20'>
            <h3 className='text-center text-tertiary w-full mb-4 border-b border-tertiary'>EVENTOS</h3>
            <div className="flex flex-col pl-4 pb-4">
                <div className="flex items-baseline">
                    <FontAwesomeIcon
                        size='1x'
                        color={COLOR.TERTIARY}
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
    </section>)
}