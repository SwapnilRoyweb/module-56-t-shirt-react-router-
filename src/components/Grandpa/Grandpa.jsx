import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('gold');

const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <RingContext.Provider value='golden ring'>
                <section className='flex'>
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty ring={ring}></Aunty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;