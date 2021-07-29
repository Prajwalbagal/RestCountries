import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Countries.module.css'
const Countries=()=>{
    const [all,setAll]=useState([]);
    const [specific,setSpecific]=useState("Filter By Region")
    
    useEffect(()=>{
        allCountries();
    },[specific])
    const allCountries=async()=>{
        var response
        if(specific==="Filter By Region"){
         response=await fetch("https://restcountries.eu/rest/v2/all");}
        else{
             response=await fetch(`https://restcountries.eu/rest/v2/region/${specific}`);
        }
        const json=await response.json();
        console.log(json);
        setAll(json);

    }
    const setregion=(e)=>{
        setSpecific(e.target.value)
        console.log(specific)
    }
   
    
    return(
        <>
        <div className={styles.searchbar}>
        <input type="text" placeholder="Search for a Country" />
        <select onChange={setregion}>
            <option>Filter By Region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
        </div>
        <div className={styles.container}>
                {
                    all.map((country)=>{
                        return(
                        <div className={styles.items}>

                        <div key={country.name} className={styles.card}>
                            <Link to={`/RestCountries/${country.name}`} >

                            <img src={country.flag} alt="laoding..." />
                            </Link>
                            <div className={styles.mar}>
                            <div className={styles.left}>
                            <h2>{country.name}</h2>
                            <p>Population:{country.population}</p>
                            <p>Region:{country.region}</p>
                            <p>Capital:{country.capital}</p>
                            </div>
                            </div>
                        </div>
                        </div>

                        )
                    })
                }

        </div>
        </>
    )
}

export default Countries;