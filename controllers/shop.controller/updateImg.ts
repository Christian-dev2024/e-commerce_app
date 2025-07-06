import imageCompression from 'browser-image-compression';
import { upload } from '@imagekit/next';


export const sendImage = async (file: File | null) => {
        try {
            //On se connecte avec imageKit
            const response = await fetch("/api/imageKit-upload-img");
            const data = await response.json();
            const { signature, expire, token, publicKey } = data;

            if (!file) return alert("Selectionnecter une image valide");
            if (file && file.size > 1024 * 1024*2) return {message: "Selectionner une image inférireur à 2Mb"}

            // Options de compression
            const options = {
                maxWidthOrHeight: 800,
                useWebWorker: true,
                fileType: "image/webp",
            };

            // Convertir l'image en WebP
            const compressedImage = await imageCompression(file, options);

            //Envoie à imageKit.io
            const uploadResponse = await upload({ expire, token, signature, publicKey, file: compressedImage, fileName: `${Date.now()}.webp` });
            console.log("Upload response:", uploadResponse.url);
            return uploadResponse?.url!

        } catch (error) {
            console.log(error)
        }
    }

