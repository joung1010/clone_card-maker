import React from 'react';
import styles from './card_edit_form.module.css';
import Button from "../../common/button/button";
import ImageFileInput from "../../common/img_file_input/imageFileInput";

const CardEditForm = ({card}) => {
    const {name,company,theme,title,email,message,fileName,fileURL} = card;
    const onSubmit = () => {

    };
    return(
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name}/>
            <input className={styles.input} type="text" name="company" value={company}/>
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">Light</option>
                <option value="Dark">dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title}/>
            <input className={styles.input} type="text" name="email" value={email}/>
            <textarea className={styles.textarea} name="message" value={message}/>
            <div className={styles.fileInput}>
                <ImageFileInput/>
            </div>
            <Button name="Delete"
                onClick={onSubmit}
            />
        </form>
    );
}

export default CardEditForm;