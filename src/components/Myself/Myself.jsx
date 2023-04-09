import React from 'react';
import Special from '../../components/Special/Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h2>Myself</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;