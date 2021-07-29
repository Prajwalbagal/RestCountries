import React from 'react';
import * as styles from './Header.module.css'
const Header=()=>{
    return(
        <>
        <div className={styles.container}>
            <div className={styles.one}> 
               <h2> Where in the world?</h2>
            </div>

            <div className={styles.two}> 
               <p>Dark Mode</p>
            </div>

        </div>
        </>
    )
}

export default Header;