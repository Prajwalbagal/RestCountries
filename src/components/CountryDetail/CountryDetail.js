import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as styles from './CountryDetail.module.css';
const CountryDetail=()=>{
    let {country} =useParams();
    useEffect(()=>{
        getData();
    },[country]);
    const [data,setData]=useState([]);
    const [loading,setloading]=useState(true);

    const getData=async ()=>{
        setData([])
        const response=await fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
        const json=await response.json();
        // const dataone=json[0];
        setData(json);
        console.log(json);
        setloading(false);
    }
    if (loading) return <h1 className={styles.loading}>Loading ...</h1>
    return(
        <>
        <div className={styles.back}>
            <Link to="/RestCountries">
            <button>⬅Back</button>
            </Link>
        </div>
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={data[0].flag} alt="loading ..." />          
            </div> 
            <div className={styles.right}>
                <h2>{data[0].name}</h2>
                <div className={styles.oneone}>                   
                        <h5 className={styles.one1}>Native Name:{data[0].nativeName}</h5>
                        <h5 className={styles.one1}>Top Level Domain:{data[0].topLevelDomain}</h5>
                        <h5 className={styles.one1}>Population:{data[0].population}</h5>
                        <h5 className={styles.one1}>Currencies:{data[0].currencies.map(curren=> curren.name+", ")}</h5>
                        <h5 className={styles.one1}>Region:{data[0].region}</h5>
                        <h5 className={styles.one1}>Languages:{data[0].languages.map(lang=> lang.name+", ")}</h5>                      
                </div>
                <div className={styles.twotwo}>
                        <h5 className={styles.two2}>Sub Region:{data[0].subregion}</h5>
                        <h5 className={styles.two2}>Capital:{data[0].capital}</h5>
                        <h5>Border Countries:{data[0].borders.map(border=> " "+border+" ")}</h5>

                </div>

            </div>   
        </div>
        </>
    )
}

export default CountryDetail;