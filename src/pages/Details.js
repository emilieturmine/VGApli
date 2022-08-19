import React from 'react';

import { Navigation } from '../components/Navigation';
import { Link, useParams } from 'react-router-dom';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';

const Details = (props) => {
    const { id } = useParams();
    return (
        <div>
            <Entete />
            <Navigation />
            <div className="container">
                <div className="row">

                    <h2 className="col-sm-12 text-center mt-5">Fiche produit:  </h2>
                </div>
                <div className=" row">

                    {
                        props.data.map((Produits, index) =>



                            <div className="col-6 col-sm-3 justify-content-space-between text-center mt-5 " >
                                <div className="card-body text-dark">

                                    <img src={"https://localhost:8000/imagesVG/propho/" + Produits.photo} alt={Produits.libelle} className="img-fluid" />
                                    <h5 className="card-title text-dark mt-3">{Produits.libelle}</h5>
                                </div>
                            </div>

                        )
                    }


                </div>
                < Footer />
            </div>
        </div>
    );
};

export { Details };