import React from 'react'
import { COLOR, GOOGLE_MAPS_EVENT_1_URL } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export const EventsMobile: React.FC = () => {
    return (
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
    );
}