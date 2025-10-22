import React from 'react'

export function MultipleFilesReader({ inputName, inputStyle, setImagePreviews, setInput }) {
    let handleImages = (e) => {
        const files = Array.from(e.target.files);
        setInput((prev) => ({
            ...prev,
            images: files
        }))
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
        <input type="file" className={inputStyle} name={inputName} onChange={(e) => { handleImages(e) }} id='images' accept='.jpg,.jpeg,.png,.webp' multiple />
    )
}

export function SingleFileReader({ inputName, inputStyle, setImagePreviews, setInput }) {
    let handleMainImage = (e) => {
        const file = e.target.files[0];
        setInput((prev) => ({
            ...prev,
            mainImage: file,
        }))

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreviews(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <input type="file" className={inputStyle} name={inputName} onChange={(e) => { handleMainImage(e) }} id='mainImage' accept='.jpg,.jpeg,.png,.webp' />
    )
}