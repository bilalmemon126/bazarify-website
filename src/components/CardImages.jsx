import { useState } from 'react'

function CardImages(props) {
  const base = "/src/assets/products/"

    const [imageMove, setImageMove] = useState(props.images)
    const [imgChange, setImgChange] = useState(0)

    return (
        <>
            <div className='grid gap-y-2.5'>
                <div className='w-full h-auto max-h-[500px] overflow-hidden grid items-center'>
                    <img src={base+imageMove[imgChange]} className='w-full' alt="" />
                </div>

                <div className='w-full flex gap-5 items-center overflow-hidden bg-brand-light'>
                    {
                        imageMove.map((value, index) => {
                            return(
                                <div className='w-fit max-h-[80px]' key={index}>
                                    <img src={base+value} className='w-[80px]' onClick={() => setImgChange(index)}/>
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