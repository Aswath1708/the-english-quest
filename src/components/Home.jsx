import React from 'react'
import NavBar from './home/NavBar';
import styles from '../styles/Home.module.css'
import NewBooks from './home/NewBooks';
import BooksList from './home/BooksList';

const Home = () => {
  return (
    <div className={styles.home}>
        <NavBar/>
        <main className={styles.mainSection}> 
        <NewBooks/>
        <BooksList/>
        </main>
    </div>
  )
}

export default Home