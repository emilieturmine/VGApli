import React from 'react';

import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';

const Details = () => {
    return (
        <div>
            <Entete />
            <Navigation />
            <h1>Details

            </h1>
            < Footer />
        </div>
    );
};

export { Details };