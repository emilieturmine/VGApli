import React from 'react';

import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';

const Actus = (props) => {

    const handleClick = () => {
        console.log("click sur categorie")
        props.onClick()
    }


    return (
        <div>
            <Entete />
            <Navigation />

            <div className="container">
                <div className="row">
                    <h2 className="col-12 text-center mt-2"><strong>Nos Evenements :</strong></h2>
                </div>
                <div className=" row ">
                    {
                        props.data.map((actus, index) =>

                            <div key={index} className="col-3 justify-content-space-between text-center mt-5 " onClick={handleClick}>
                                <div className="card-body text-dark">

                                    <img src={"https://localhost:8000/imagesVG/actupho/" + actus.photo} alt={actus.photo} style={{ width: "250px", height: "250px" }} />
                                    <h5 className="card-title text-dark mt-3">{actus.nom}</h5>
                                </div>
                            </div>


                        )
                    }
                </div>            </div >

            < Footer />
        </div>

    );
};

export { Actus };

