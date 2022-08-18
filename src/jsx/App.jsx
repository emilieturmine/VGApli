
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css';
import {Souscategories} from '../pages/Souscategories';
import { Details } from '../pages/Details';
import {Categories} from '../pages/Categories';
import {Produits} from '../pages/Produits';
import {Home} from '../pages/Home';
import { fetchSync } from './fetchSync';
import { useState, useEffect } from 'react';
import {Marques} from '../pages/Marques';
import {Actus} from '../pages/Actus';

const App = (props) => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);

    useEffect(() => {
        fetchSync('https://127.0.0.1:8000/api/categories', 'get').then( (data) => setData1(data) );
        // fetchSync('https://127.0.0.1:8000/api/ss_categories', 'get').then( (data) => setData2(data) );
        fetchSync('https://127.0.0.1:8000/api/produits', 'get').then( (data) => setData3(data) );
        fetchSync('https://127.0.0.1:8000/api/produits/{id}', 'get').then( (data) => setData4(data) );
        fetchSync('https://127.0.0.1:8000/api/fournisseurs', 'get').then( (data) => setData5(data) );
        fetchSync('https://127.0.0.1:8000/api/actus', 'get').then( (data) => setData6(data) );
    }, [])


    const dataglobal = {
        categories : data1,
        sscategories:data2,
        produits:data3,
        details:data4,
        fournisseurs:data5,
        actus:data6
    }

    const handleClickCategorie = (c) => {
        
        fetchSync('https://127.0.0.1:8000/api/ss_categories', 'get').then( (data) => setData2(data) );
        console.log(c);
        setData2(c.ssCategories)
    }

  
    console.log("render App...");
    return (
        <BrowserRouter>
       
            <Routes>

            <Route path="/" element={<Home data={dataglobal}/>} />
                <Route path="/Categories" element={<Categories data={data1} onClick={handleClickCategorie} />} />
                <Route path="/Souscategories/:id" element={<Souscategories data={data2} />} />
                <Route path="/Produits" element={<Produits data={data3}/>} />
                <Route path="/Details" element={<Details data={data4}/>} />
                <Route path="/Marques" element={<Marques data={data5}/>} />
                <Route path="/Actus" element={<Actus data={data6}/>} />
             {/* path="*" fonctionne si jamais l'url ne correspond à rien de  declaré au dessus */}
               <Route path="*" element={<Home/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export { App };