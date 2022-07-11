import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from "./service/authService";
import initializeApp from "./service/fiorebase"
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./common/img_file_input/imageFileInput";


const root = ReactDOM.createRoot(document.getElementById('root'));
const authService = new AuthService(initializeApp);
const imageUploader = new ImageUploader();
const FileInput = props => (
    <ImageFileInput {...props} imageUploader={imageUploader}/>
);

root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>
);
