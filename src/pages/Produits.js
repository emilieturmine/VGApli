import React from 'react';

import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';

const Produits = () => {
  return (
    <div>
      <Entete />
      <Navigation />
      <h1>Nos Produits</h1>
      <Link to="/Details">
        <li> details produits

        </li>
      </Link>

      < Footer />
    </div>
  );
};

export { Produits };