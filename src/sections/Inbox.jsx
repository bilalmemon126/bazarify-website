import React from 'react'
import CurrentTime from '../components/CurrentTime'
import chatVector from '../assets/chat vector.png'
import profileVector from '../assets/profile vector.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getChat } from '../redux/features/chat/chatAction'
import { getProductDetails } from '../redux/features/products/productAction'

function Inbox({ userId, setOpen }) {
    const dispatch = useDispatch()
    
    const { productChats, allChats } = useSelector((state) => state.chat)
    console.log(allChats)
    console.log(productChats)

    let handleSelectChat = (userId, productId) => {
        dispatch(getProductDetails(productId))
        dispatch(getChat({ productId: productId, userId: userId }))
    }
    return (
        <div className='w-full h-fit'>
            <div className='w-full h-[100px] grid items-center p-2.5 border-b shadow border-brand-dark mb-2.5'>
                <h1 className='text-center text-3xl font-medium'>INBOX</h1>
            </div>
            <div className='min-h-72 h-fit max-h-112 overflow-auto grid'>
                {
                    allChats.length > 0 ?
                        allChats.map((v, i) => {
                            return (
                                <div className='w-full max-w-72 justify-self-center h-fit flex gap-2.5 border-b items-center justify-between p-2.5 border-brand-dark bg-white cursor-pointer' onClick={() => {handleSelectChat(userId, v.productId._id), setOpen ? setOpen(false) : ""}} key={i}>
                                    <div className='flex w-fit h-fit items-center gap-2.5'>
                                        <div className='w-fit h-fit rounded-full overflow-hidden'>
                                            <img src={profileVector} className='w-[60px]' alt="" />
                                        </div>
                                        <div className='h-fit'>
                                            <p className='text-md text-brand-primary font-medium'>{v.buyerId._id !== userId ? `${v.buyerId.firstName} ${v.buyerId.lastName}` : `${v.sellerId.firstName} ${v.sellerId.lastName}`}</p>
                                            <h2 className='text-sm text-brand-primary font-medium'>{v.productId.title.slice(0, 36)}...</h2>
                                        </div>
                                    </div>
                                    <div className='w-fit self-end'>
                                        <p className='text-[10px]'>{<CurrentTime />}</p>
                                    </div>
                                </div>
                            )
                        }) :
                        <div className='h-fit flex flex-col items-center justify-center'>
                            <div className='w-[50%]'>
                                <img src={chatVector} alt="" />
                            </div>
                            <p className='text-center'>There is no Chats Available</p>
                        </div>
                }
            </div>

        </div>
    )
}

export default Inbox