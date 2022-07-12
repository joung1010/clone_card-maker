class ImageUploader {
    constructor() {
        this.cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
        this.uploadPreset = process.env.REACT_APP_CLOUDINARY_PRESET_NAME
    }

   async upload(file) {
        const data = new FormData();
        data.append('file',file);
       data.append("upload_preset", this.uploadPreset);

       const result  = await fetch(
           `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
           {
               method:'POST',
               body:data,
           }
       );
       return await result.json();
    }
}

export default ImageUploader;