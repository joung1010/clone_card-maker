import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from "./service/authService";
import initializeApp from "./service/fiorebase"
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./common/img_file_input/imageFileInput";
import CardRepository from "./service/card_repository";


const root = ReactDOM.createRoot(document.getElementById('root'));
const authService = new AuthService(initializeApp);
const imageUploader = new ImageUploader();
const FileInput = props => (
    <ImageFileInput {...props} imageUploader={imageUploader}/>
);
const cardRepository = new CardRepository(initializeApp);
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository ={cardRepository} />
  </React.StrictMode>
);
