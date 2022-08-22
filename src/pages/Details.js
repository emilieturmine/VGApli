import { useState, useEffect } from 'react';

import { Navigation } from '../components/Navigation';
import { Link, useParams } from 'react-router-dom';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';
import { fetchSync } from '../jsx/fetchSync';

const Details = (props) => {

    const { id } = useParams();

    const [prod, setProd] = useState({
        libelle: "",
        photo: "",
    });

    console.log(id);

    useEffect(() => {
        console.log("change id")
        fetchSync('https://127.0.0.1:8000/api/produits/' + id, 'get').then((data) => setProd(data));

    },
        [id]);

    return (
        <div>
            <Entete />
            <Navigation />
            <div className="container">
                <div className="row">

                    <h2 className="col-sm-12 text-center mt-5">Fiche produit:  </h2>
                </div>
                <h5 className="card-title text-dark mt-3">{prod.libelle}</h5>
                <img src={"https://localhost:8000/imagesVG/propho/" + prod.photo} alt={prod.libelle} className="img-fluid" />


                < Footer />
            </div>
        </div>
    );
};

export { Details };