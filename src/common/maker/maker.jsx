import React, {useEffect} from 'react';
import styles from './maker.module.css';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import {useNavigate} from "react-router-dom";

const Maker = ({authService}) => {
    const navigate = useNavigate();

    const onLogout = ()=>{
        authService.logout();
    };

    useEffect(()=>{
        authService.onAuthStateChanged(user => {
            user || navigate('/');
        });
    });

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <Footer/>
        </section>
    );
}

export default Maker;