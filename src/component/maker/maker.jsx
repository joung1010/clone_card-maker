import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useLocation, useNavigate} from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import CardRepository from "../../service/card_repository";

const Maker = ({authService,FileInput,cardRepository}) => {
    const navigate = useNavigate();
    const locationState = useLocation().state;
    const [cards,setCards] = useState({});
    const [userId, setUserId] = useState(locationState && locationState.id);



    const onLogout = ()=>{
        authService.logout();
    };

    useEffect(()=>{
        authService.onAuthStateChanged(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                navigate('/');
            }
        });
    });


    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const update = {...cards};
            update[card.id]=card;
            return update;
        });
        cardRepository.saveCard(userId, card);
    };
    const deleteCard = (card) => {
        setCards(cards => {
            const update = {...cards};
            delete update[card.id];
            return update;
        });
        cardRepository.remoceCard(userId, card);
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