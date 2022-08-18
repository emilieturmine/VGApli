import React from 'react';
import { Navigation } from '../components/Navigation';
import { Link, useParams } from 'react-router-dom';

import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';

const Souscategories = (props) => {

  const { id } = useParams();

  return (
    <div>
      <Entete />
      <Navigation />
      <h1>Nos sous categories: {id} </h1>
      <Link to="/Produits">
        {
          props.data.map((ss_categories, index) =>
            <div key={index}>
              {ss_categories.nom}
              <img src={"https://localhost:8000/imagesVG/ssCatPho/" + ss_categories.photo} alt="logo" />
            </div>
          )
        }
      </Link>

      < Footer />
    </div>
  );
};

export { Souscategories };