import React, {useRef, useState} from 'react';
import styles from './card_add_form.module.css';
import Button from "../../common/button/button";
import ImageFileInput from "../../common/img_file_input/imageFileInput";

const CardAddForm = ({FileInput,addCard}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [file,setFile] = useState({
        name : null,
        url : null,
    });

    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id : Date.now(),
            name : nameRef.current.value || '',
            company : companyRef.current.value || '',
            theme : themeRef.current.value ,
            title : titleRef.current.value || '',
            email : emailRef.current.value || '',
            message : messageRef.current.value || '',
            fileName : file.name || '',
            fileURL: file.url || '',
        } ;
        addCard(card);
        formRef.current.reset();
        setFile({
            name: null,
            url: null,
        });
    };
    const onHandleFileChange = (file) => {
        setFile({
            name : file.name,
            url : file.url,
        });
    };
    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name"/>
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company"/>
            <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title"/>
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email"/>
            <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message"/>
            <div className={styles.fileInput}>
                <FileInput onHandleFileChange={onHandleFileChange}/>
            </div>
            <Button name="Add"
                    onClick={onSubmit}
            />
        </form>
    );
}

export default CardAddForm;