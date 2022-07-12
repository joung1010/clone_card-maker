import React, {useRef} from 'react';
import styles from './card_edit_form.module.css';
import Button from "../../common/button/button";
import ImageFileInput from "../../common/img_file_input/imageFileInput";

const CardEditForm = ({FileInput,card,updateCard,deleteCard}) => {
    const {name, company, theme, title, email, message, fileName, fileURL} = card;

    const onSubmit = () => {
        deleteCard(card);
    };
    const onChange = event => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    const onHandleFileChange = (file) => {
        updateCard({
            ...card,
            fileName:file.name,
            fileURL:file.url,
        });
    };

    return (
        <form className={styles.form}>
            <input  className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
            <input  className={styles.input} type="text" name="company" value={company} onChange={onChange}/>
            <select  className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">Light</option>
                <option value="dark">dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input  className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
            <input  className={styles.input} type="text" name="email" value={email} onChange={onChange}/>
            <textarea  className={styles.textarea} name="message" value={message} onChange={onChange}/>
            <div className={styles.fileInput}>
                <FileInput name={name} onHandleFileChange={onHandleFileChange}/>
            </div>
            <Button name="Delete"
                    onClick={onSubmit}
            />
        </form>
    );
}

export default CardEditForm;