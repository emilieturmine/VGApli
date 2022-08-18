import React from 'react';

import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { Entete } from '../components/Entete';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';

const Marques = (props) => {

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
                    <h2 className="col-12 text-center mt-2"><strong>Nos Marques :</strong></h2>
                </div>
                <div className=" row ">
                    {
                        props.data.map((fournisseurs, index) =>

                            <div key={index} className="col-3 justify-content-space-between text-center mt-5 " onClick={handleClick}>
                                <div className="card-body text-dark">

                                    <img src={"https://localhost:8000/imagesVG/foupho/" + fournisseurs.photo} alt={fournisseurs.photo} style={{ width: "250px", height: "250px" }} />
                                    <h5 className="card-title text-dark mt-3">{fournisseurs.nom}</h5>
                                </div>
                            </div>


                        )
                    }
                </div>            </div >

            < Footer />
        </div>

    );
};

export { Marques };












































// import React from 'react';

// import { Navigation } from '../components/Navigation';
// import { Link } from 'react-router-dom';
// import { Entete } from '../components/Entete';
// import { Footer } from '../components/Footer';
// import { useState, useEffect } from 'react';
// const Marques = (props) => {

//     const handleClick = () => {
//         console.log("click sur categorie")
//         props.onClick()
//     }
//     return (
//         <div>
//             <Entete />
//             <Navigation />
//             <div>
//                 <h2 className="text-center mt-5 mb-6"><strong>Nos Marques :</strong></h2>
//             </div>

//             <div className="col-12 text-center">
//                 <article >
//                     <h4 className="text-center text-info mt-5 mb-5" id="important">Parce que nous travaillons en direct avec les plus grandes marques, nous pouvons vous proposer les meilleurs prix du marché.</h4>
//                 </article>
//             </div>
//             <div className=" row ">
//                 {
//                     props.map((marque, index) =>

//                         <div key={index} className="col-6 col-sm-3 justify-content-space-between text-center mt-5 " onClick={handleClick}>
//                             <div className="card-body text-dark">

//                                 <img src={"https://localhost:8000/imagesVG/foupho/" + marque.photo} alt={marque.photo} style={{ width: "250px", height: "250px" }} />
//                                 <h5 className="card-title text-dark mt-3">{marque.nom}</h5>
//                             </div>
//                         </div>


//                     )
//                 }

//             </div>
//             < Footer />
//         </div>
//     );
// };

// export { Marques };