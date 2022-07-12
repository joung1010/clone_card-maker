import React, {useRef} from 'react';
import styles from './ImageFileInput.module.css';

const ImageFileInput = ({imageUploader,name,onHandleFileChange}) => {
    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const onFileChange = async (event) => {
        const uploaded = await imageUploader.upload(event.target.files[0]);
        console.log(uploaded);
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
            <button className={styles.button}
                    onClick={onButtonClick}
            >
                {name || 'No File'}
            </button>
        </div>
    );
}

export default ImageFileInput;