import React from 'react';

import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';
const handleClick = () => {
    console.log("click sur categorie")
    props.onClick()
}
const Home = ({ data }) => {

    const { categories, fournisseurs } = data

    console.log(data);
    return (
        <div>
            <Entete />
            <Navigation />
            <div className="container">
                <div className="row">
                    <article className="col-sm-12">
                        <h2 className="text-center mt-5"><strong>Bienvenue!!</strong></h2>
                        <p className="ml-5 text-center mt-5"> Je suis aujourd’hui très fier de diriger cette entreprise familiale indépendante de plus de 1.500 employés et de 15.850.000 clients.</p>
                        <p className="ml-5 text-center" id="important" >Notre passion commune pour la musique nous unit et façonne notre philosophie.</p>
                        <p className="ml-5 text-center">Vendre les meilleurs produits au meilleur prix est l’une de nos forces.
                            Le service est tout autant important à nos yeux, nous souhaitons que vous en ayiez pour votre argent avec un crédo : la valeur ajoutée. </p>
                        <p className="ml-5 text-center" id="important" >   Les clients satisfaits nous apportent satisfaction et nous sommes ravis de l’ambiance conviviale qui règne ici.
                        </p>

                        <div>
                            <h2 className="text-center mt-5 mb-6"><strong>Nos catégories :</strong></h2>
                        </div>

                    </article>
                </div>
                <div id='categories' className=" row">
                    {
                        categories.map((categorie, index) =>

                            <div key={index} className="col-6 col-sm-3 justify-content-space-between text-center mt-5 " onClick={handleClick}>
                                <div className="card-body text-dark">

                                    <img src={"https://localhost:8000/imagesVG/CatPho/" + categorie.photo} alt={categorie.photo} className="img-fluid" />
                                    <h5 className="card-title text-dark mt-3">{categorie.nom}</h5>
                                </div>
                            </div>


                        )
                    }
                </div >
                <div className="col-sm-12 text-center">
                    <article >
                        <h4><q className=" text-info mt-5">La musique donne une âme à nos coeurs, et des ailes à la pensée.</q></h4>
                        <h5><p className=" text-info mt-2"><strong>Platon</strong></p></h5>
                    </article>
                </div>

                <div>
                    <h2 className="text-center mt-5 mb-6"><strong>Nos Marques :</strong></h2>
                </div>



                <div className=" row ">
                    {
                        fournisseurs.map((marque, index) =>

                            <div key={index} className="col-6 col-sm-3 justify-content-space-between text-center mt-5 " onClick={handleClick}>
                                <div className="card-body text-dark">

                                    <img src={"https://localhost:8000/imagesVG/foupho/" + marque.photo} alt={marque.photo} className="img-fluid" />
                                    <h5 className="card-title text-dark mt-3">{marque.nom}</h5>
                                </div>
                            </div>


                        )
                    }
                </div>

                <div className="col-12 text-center">
                    <article >
                        <h4 className="text-center text-info mt-5 mb-5" id="important">Parce que nous travaillons en direct avec les plus grandes marques, nous pouvons vous proposer les meilleurs prix du marché.</h4>
                    </article>
                </div >

                <div>
                    <h2 className="text-center mt-5 mb-6">Nos Evenements :</h2>

                    <p className="text-center mt-5 mb-6">Aucun évenement pour le moment.</p>

                </div>



















            </div>

            < Footer />
        </div >
    );

};

export { Home };