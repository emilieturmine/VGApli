import React from 'react';
import { Navigation } from '../components/Navigation';
import { Link, useParams } from 'react-router-dom';

import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';

const Souscategories = (props) => {
  const handleClick = (s) => {
    // console.log("click sur categorie")
    props.onClick(s)
  }

  const { id } = useParams();

  return (
    <div>
      <Entete />
      <Navigation />
      <div className="container">
        <div className="row">

          <h2 className="col-sm-12 text-center mt-5">Nos sous categories:  </h2>
        </div>
        <div className=" row">

          {
            props.data.map((ss_categories, index) =>

              <Link to={"/Produits/" + ss_categories.id} key={ss_categories.id} className="col-6 col-sm-3 justify-content-space-between text-center mt-5 " onClick={() => { handleClick(ss_categories) }}>


                <div className="card-body text-dark">

                  <img src={"https://localhost:8000/imagesVG/ssCatPho/" + ss_categories.photo} alt={ss_categories.nom} className="img-fluid" />
                  <h5 className="card-title text-dark mt-3">{ss_categories.nom}</h5>
                </div>

              </Link>
            )
          }


        </div>
        < Footer />
      </div>
    </div>
  );
};

export { Souscategories };