import styles from './search_header.module.css';
import React from 'react';

const SearchHeader = (props) => {
    return( // 이미지 상대경로로 하니까 안나옴... 왜? 
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/> 
                <h1>Yotube</h1>
            </div>
            <input type="search" className={styles.input} placeholder="Search..."/>
            <button className={styles.button} type="submit" >
                <img
                className={styles.buttonImg}
                src={process.env.PUBLIC_URL + '/images/search.png'}
                alt="search"
                />
            </button>
        </header>
    )
}

export default SearchHeader;