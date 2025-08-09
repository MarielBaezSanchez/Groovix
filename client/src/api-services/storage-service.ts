//import { getStorage, ref, uploadBytes, getDownloadURL } from "cloudinary/storage";
//import cloudinaryApp from "../config/cloudinary-config";
//export const uploadFileAndRetunrUrl = async (file: any) => {
 //       const storage = getStorage(cloudinaryApp);
 //       const storageRef = ref(storage, `images/${file.name}`);
 //       const response = await uploadBytes(storageRef, file);
 //       const downloadURL = await uploadBytes(response.ref);
 //       return downloadURL;  
//}

export const uploadFileAndReturnUrl = async (file: File) => {
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();
    return data.secure_url; // URL pública de la imagen subida
};