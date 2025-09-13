import React, { useState } from 'react'
import profileVector from '../assets/profile vector.jpg'
import { useParams } from 'react-router-dom'
import { products } from '../data'
import Button from '../components/Button'
import CurrentTime from '../components/CurrentTime'
import { IoSend } from 'react-icons/io5'
import Inbox from '../sections/Inbox'

function Chat() {
    const { myId } = useParams()
    const { productId } = useParams()
    const base = "/products/"

    let [input, setInput] = useState("")

    return (
        <div className='w-full grid grid-cols-12 my-5'>
            <div className='col-span-10 col-start-2 grid grid-cols-10 gap-2.5 bg-brand-light p-2.5'>
                <div className='col-span-4 bg-white'>
                    <Inbox productId={productId} profileVector={profileVector} />
                </div>

                <div className='col-span-6'>
                    <div className='h-fit flex gap-2.5 border-y p-2.5 border-brand-dark bg-white'>
                        <div className='w-fit h-fit rounded-full overflow-hidden'>
                            <img src={profileVector} className='w-[60px]' alt="" />
                        </div>
                        <div className='h-fit'>
                            <p className='text-md text-brand-primary font-medium'>Posted By</p>
                            <h2 className='text-xl text-brand-primary font-medium'>Bilal Memon</h2>
                        </div>
                    </div>

                    <div className='w-full border-b bg-white border-brand-dark grid grid-cols-6 items-center justify-between gap-2.5 p-2.5'>
                        <div className='flex items-center gap-2.5 col-span-6 sm:col-span-4'>
                            <div className='col-span-1 min-w-[60px] max-w-[80px] h-fit overflow-hidden grid items-center justify-center rounded'>
                                <img src={base + products[productId].mainImage} alt="" />
                            </div>
                            <div className='w-full min-w-[130px] h-fit col-span-3'>
                                <p className='text-[10px] sm:text-sm'>{products[productId].title.slice(0, 36)}...</p>
                                <p className='text-sm font-medium sm:text-lg'>Rs {products[productId].price}</p>
                            </div>
                        </div>
                        <div className='w-full justify-self-end col-span-6 sm:col-span-2 sm:w-fit'>
                            <Button btnPath={`/productdetails/${productId}`} btnText={"View Add"} />
                        </div>
                    </div>

                    <div className='w-full my-2.5 h-[400px] grid gap-2.5 overflow-y-auto overflow-x-hidden'>
                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-auto bg-white justify-self-start rounded-r-lg rounded-tl-lg sm:w-[250px]'>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='justify-self-end text-[11px]'><CurrentTime /></p>
                        </div>
                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-auto bg-brand-dark justify-self-end rounded-l-lg rounded-tr-lg sm:w-[250px]'>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='justify-self-end text-[11px]'><CurrentTime /></p>
                        </div>
                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-auto bg-white justify-self-start rounded-r-lg rounded-tl-lg sm:w-[250px]'>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='justify-self-end text-[11px]'><CurrentTime /></p>
                        </div>
                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-auto bg-brand-dark justify-self-end rounded-l-lg rounded-tr-lg sm:w-[250px]'>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='justify-self-end text-[11px]'><CurrentTime /></p>
                        </div>
                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-auto bg-white justify-self-start rounded-r-lg rounded-tl-lg sm:w-[250px]'>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='justify-self-end text-[11px]'><CurrentTime /></p>
                        </div>
                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-auto bg-brand-dark justify-self-end rounded-l-lg rounded-tr-lg sm:w-[250px]'>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='justify-self-end text-[11px]'><CurrentTime /></p>
                        </div>
                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-auto bg-white justify-self-start rounded-r-lg rounded-tl-lg sm:w-[250px]'>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='justify-self-end text-[11px]'><CurrentTime /></p>
                        </div>
                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-auto bg-brand-dark justify-self-end rounded-l-lg rounded-tr-lg sm:w-[250px]'>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='justify-self-end text-[11px]'><CurrentTime /></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12'>
                        <input type="text" name="search" placeholder="Message" value={input} onChange={(e) => { setInput(e.target.value) }} className="w-full bg-white rounded-l p-2.5 col-span-10 text-brand-primary focus:outline-none" />
                        <div className='col-span-2 bg-white rounded-r p-2.5 pr-5 flex justify-end items-center'>
                            <IoSend className='text-lg text-brand-primary' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat