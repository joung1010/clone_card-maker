import React, {useRef, useState} from 'react';
import styles from './ImageFileInput.module.css';

const ImageFileInput = ({imageUploader,name,onHandleFileChange}) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const onFileChange = async (event) => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        onHandleFileChange({
            name : uploaded.original_filename,
            url : uploaded.url
        });
    };

    return (
        <div className={styles.container}>
            <input className={styles.input}
                   type="file"
                   accept="image/*"
                   name="file"
                   ref={inputRef}
                   onChange={onFileChange}
            />
            {
                !loading &&
                <button className={`${styles.button} ${name ? styles.pink : styles.grey}`}
                        onClick={onButtonClick}
                >
                    {name || 'No File'}
                </button>
            }
            {loading && <div className={styles.loading}/>}
        </div>
    );
}

export default ImageFileInput;