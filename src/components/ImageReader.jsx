import React from 'react'

export function MultipleFilesReader({inputName, inputStyle, setSelectedFiles, setImagePreviews }) {
    let handleImages = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);

        const previews = [];
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                previews.push(reader.result);
                setImagePreviews([...previews]);
            };
            reader.readAsDataURL(file);
        });
    }
    return (
        <input type="file" className={inputStyle} name={inputName} onChange={(e) => { handleImages(e) }} accept='.jpg,.jpeg,.png,.webp' multiple required />
    )
}

export function SingleFileReader({inputName, inputStyle, setSelectedFiles, setImagePreviews }) {
    let handleMainImage = (e) => {
        const file = e.target.files[0];
        setSelectedFiles(file);
    
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreviews(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <input type="file" className={inputStyle} name={inputName} onChange={(e) => { handleMainImage(e) }} accept='.jpg,.jpeg,.png,.webp' required />
    )
}