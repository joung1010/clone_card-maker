import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useNavigate} from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({authService,FileInput}) => {
    const navigate = useNavigate();
    const [cards,setCards] = useState({
        '1':   {
            id:'1',
            name: 'Ellie',
            theme : 'dark',
            company:'Samsung',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message:'go for it',
            fileName : 'ellie',
            fileURL: null,
        },
        '2': {
            id:'2',
            name: 'Bob',
            theme : 'light',
            title: 'Backend Engineer',
            company:'Samsung',
            email: 'Bob@gmail.com',
            message:'go for it',
            fileName : 'ellie',
            fileURL: 'Bob.png',
        },
        '3': {
            id:'3',
            name: 'mason',
            theme : 'colorful',
            title: 'Frontend Engineer',
            company:'Samsung',
            email: 'mason@gmail.com',
            message:'go for it',
            fileName : 'mason',
            fileURL: null,
        },
    });




    const onLogout = ()=>{
        authService.logout();
    };

    useEffect(()=>{
        authService.onAuthStateChanged(user => {
            user || navigate('/');
        });
    });


    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const update = {...cards};
            update[card.id]=card;
            return update;
        });
    };
    const deleteCard = (card) => {
        setCards(cards => {
            const update = {...cards};
            delete update[card.id];
            return update;
        });
    };

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor FileInput={FileInput}
                        cards={cards}
                        addCard={createOrUpdateCard}
                        updateCard={createOrUpdateCard}
                        deleteCard={deleteCard}
                />
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;