import React from 'react';
import { Navigation } from '../components/Navigation';
import { Link, useParams } from 'react-router-dom';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';
const Produits = (props) => {

  const handleClick = (p) => {
    console.log("click sur produit")
    console.log(p);
    props.onClick(p)
  }

  const { id } = useParams();
  return (
    <div>
      <Entete />
      <Navigation />
      <div className="container">
        <div className="row">

          <h2 className="col-sm-12 text-center mt-5">Nos Produits : </h2>
        </div>
        <div className=" row">
          {
            props.data.map((produit, index) =>

              <Link
                to={"/Details/" + produit.id}
                key={produit.id}
                className="col-6 col-sm-3 justify-content-space-between text-center mt-5 "
                onClick={() => { handleClick(produit) }}
              >


                <div className="card-body text-dark">

                  <img src={"https://localhost:8000/imagesVG/propho/" + produit.photo} alt={produit.libelle} className="img-fluid" />
                  <h5 className="card-title text-dark mt-3">{produit.libelle}</h5>
                  <h5 className="card-title text-danger mt-3 ">{produit.prixUnitaire} € </h5>


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


export { Produits };