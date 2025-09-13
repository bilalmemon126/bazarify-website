import React from 'react'
import CurrentTime from '../components/CurrentTime'
import { products } from '../data'

function Inbox({productId, profileVector}) {
    return (
        <div>
            <div className='h-[100px] grid items-center p-2.5 border-b shadow border-brand-dark mb-2.5'>
                <h1 className='text-3xl font-medium'>INBOX</h1>
            </div>
            <div className='h-fit flex gap-2.5 border-b p-2.5 border-brand-dark bg-white'>
                <div className='w-fit h-fit rounded-full overflow-hidden'>
                    <img src={profileVector} className='w-[60px]' alt="" />
                </div>
                <div className='h-fit'>
                    <p className='text-md text-brand-primary font-medium'>Bilal Memon</p>
                    <h2 className='text-sm text-brand-primary font-medium'>{products[productId].title.slice(0, 36)}..</h2>
                </div>
                <div className='w-fit self-end'>
                    <p className='text-[10px]'>{<CurrentTime />}</p>
                </div>
            </div>
        </div>
    )
}

export default Inbox