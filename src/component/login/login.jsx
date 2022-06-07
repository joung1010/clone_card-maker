import React, {useEffect} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';
import {useNavigate} from "react-router-dom";

const Login = ({authService}) => {
    const navigate = useNavigate();
    const goToMaker = (userId)=>{
        navigate('/maker',{state:{id:userId}});
    }
    const lonLogin = (event)=>{
    authService.login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
};

    useEffect(()=>{
        authService.onAuthStateChanged(user => {
            user && goToMaker(user.uid);
        });
    });

 return   (
        <section className={styles.login}>
            <Header/>
                <section>
                    <h1>Login</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <button className={styles.button} onClick={lonLogin}>Google</button>
                        </li>
                        <li className={styles.item}>
                            <button className={styles.button} onClick={lonLogin}>Github</button>
                        </li>
                    </ul>
                </section>
            <Footer/>
        </section>
    );
}
export default Login;