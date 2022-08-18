import React from 'react';

import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';
const Categories = (props) => {

    // const { categories, sscategories } = data

    const handleClick = (c) => {
        // console.log("click sur categorie")
        props.onClick(c)
    }


    return (
        <div>
            <Entete />
            <Navigation />

            <div className="container">
                <div className="row">
                    <h2 className="col-12 text-center mt-2"><strong>Nos Categories :</strong></h2>
                </div>
                <div id='categories' className=" row ">

                    {
                        props.data.map((categorie, index) =>

                            <Link to={"/Souscategories/" + categorie.id} key={categorie.id}>
                                <div className="col-3 justify-content-space-between text-center mt-5 " onClick={() => { handleClick(categorie) }}>
                                    <div className="card-body text-dark">

                                        <img src={"https://localhost:8000/imagesVG/CatPho/" + categorie.photo} alt={categorie.photo} style={{ width: "250px", height: "250px" }} />
                                        <h5 className="card-title text-dark mt-3">{categorie.nom}</h5>
                                    </div>
                                </div>
                            </Link>


                        )
                    }
                </div>            </div >

            < Footer />
        </div>

    );
};

export { Categories };