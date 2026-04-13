import { useState } from 'react'

function CardImages({images, mainImage}) {

    const [imageMove, setImageMove] = useState({images, mainImage})
    const [imgChange, setImgChange] = useState(0)

    return (
        <>
            <div className='grid gap-y-2.5'>
                <div className='w-full h-auto max-h-[500px] overflow-hidden grid items-center'>
                    <img src={imageMove.mainImage ? imageMove.mainImage.secure_url : imageMove.images[imgChange].secure_url} className='w-full' alt="" />
                </div>

                <div className='w-full flex gap-5 items-center overflow-hidden bg-brand-light'>
                    {
                        imageMove.images.map((value, index) => {
                            return(
                                <div className='w-fit max-h-[80px]' key={index}>
                                    <img src={value.secure_url} className='w-[80px]' onClick={() => {setImageMove((prev) => ({...prev, mainImage: null})), setImgChange(index)}}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CardImages