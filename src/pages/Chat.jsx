import React, { useEffect, useRef, useState } from 'react'
import profileVector from '../assets/profile vector.jpg'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import chatVector from '../assets/chat vector.png'
import { IoSend } from 'react-icons/io5'
import Inbox from '../sections/Inbox'
import { getProductDetails } from '../redux/features/products/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { addChatNotification, createChat, deleteChatNotification, getAllChats, getAllNotifications, getChat, getChatNotification } from '../redux/features/chat/chatAction'
import { socket } from '../socket.js'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import moment from 'moment'

function Chat() {
    const { myChatId } = useParams()
    const { productId } = useParams()

    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState([])
    const [getRoomId, setGetRoomId] = useState([])
    let [roomAndProductId, setRoomAndProductId] = useState({ roomId: null, productId: null })
    const dispatch = useDispatch()
    let [input, setInput] = useState("")

    const { productDetails, productDetailsLoading } = useSelector((state) => state.products)
    const { productChats, allChats, chatLoading } = useSelector((state) => state.chat)


    const bottomRef = useRef(null)
    useEffect(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), [productChats, messages])

    useEffect(() => {
        dispatch(getAllChats({ userId: myChatId }))
    }, [])

    useEffect(() => {
        if (productId && allChats?.length > 0 && myChatId) {
            const filteredRooms = allChats.filter(
                v => v.productId?._id === productId && v.buyerId?._id === myChatId
            );
    
            setGetRoomId(filteredRooms);
    
            if (filteredRooms.length > 0) {
                dispatch(getChat({
                    productId,
                    userId: myChatId,
                    roomId: filteredRooms[0]?.roomId
                }));
            }
        }
    }, [productId, allChats, myChatId]);

    useEffect(() => {
        if (productId || roomAndProductId.productId) {
            dispatch(getProductDetails(productId || roomAndProductId.productId))
        }
        if (roomAndProductId.roomId && roomAndProductId.productId) {
            dispatch(getChat({ productId: productId || roomAndProductId.productId, userId: myChatId, roomId: roomAndProductId.roomId }))
            dispatch(deleteChatNotification({ userId: myChatId, chatRoomId: roomAndProductId.roomId }))
            setMessages([])
        }
        dispatch(getChatNotification(myChatId))
    }, [roomAndProductId])

    console.log(roomAndProductId)

    let userData = {
        buyerId: myChatId === productChats[0]?.sellerId ? productChats[0]?.buyerId : myChatId,
        sellerId: productDetailsLoading ? "" : productDetails?.data?.createdBy._id,
        productId: productId || productChats[0]?.productId,
        senderId: myChatId,
        roomId: `${productId || productChats[0]?.productId}_${myChatId === productChats[0]?.sellerId ? productChats[0]?.buyerId : myChatId}_${productDetailsLoading ? "" : productDetails?.data?.createdBy._id}`
    }

    useEffect(() => {
        if (userData.roomId) {
            socket.emit("joinRoom", userData.roomId)
        }
    }, [userData.roomId])


    const handleSendMsg = () => {
        if (!input.trim()) {
            return alert("please type message")
        }

        userData.message = input
        dispatch(createChat(userData))


        socket.emit("sendMessage", userData)

        if (myChatId === userData.buyerId) {
            console.log("hello")
            socket.emit("sendNotification", { notificationRoomId: userData.sellerId, messageRoomId: userData.roomId })
            if (userData.roomId !== roomAndProductId.roomId) {
                dispatch(addChatNotification({ senderId: myChatId, receiverId: userData.sellerId, chatRoomId: userData.roomId }))
            }
        }

        if (myChatId === userData.sellerId) {
            console.log("hellloo")
            socket.emit("sendNotification", { notificationRoomId: userData.buyerId, messageRoomId: userData.roomId })
            if (userData.roomId !== roomAndProductId.roomId) {
                dispatch(addChatNotification({ senderId: myChatId, receiverId: userData.buyerId, chatRoomId: userData.roomId }))
            }
        }


        setInput("")
    }

    useEffect(() => {
        let handleReceiveMessage = (message) => {
            if (message) {
                setMessages(prev => [...prev, message])
            }
        }
        socket.on("receiveMessage", handleReceiveMessage)
        return () => {
            socket.off("receiveMessage", handleReceiveMessage)
        }
    }, [])
    return productDetailsLoading ? (
        <p>loading...</p>
    ) :
        (
            <>
                <div className='w-full h-fit grid grid-cols-12 my-5'>
                    <div className='col-span-10 col-start-2 grid grid-cols-10 gap-2.5 bg-brand-light p-2.5'>
                        <div className='block md:hidden'>
                            <Dialog open={open} onClose={setOpen} className="relative z-10">
                                <DialogBackdrop
                                    transition
                                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                                />

                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                        <DialogPanel
                                            transition
                                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-fit sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                                        >
                                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                <Inbox userId={myChatId} setOpen={setOpen} roomAndProductId={roomAndProductId} setRoomAndProductId={setRoomAndProductId} />
                                            </div>
                                        </DialogPanel>
                                    </div>
                                </div>
                            </Dialog>
                        </div>

                        <div className='hidden bg-white md:block md:col-span-4 lg:col-span-3'>
                            <Inbox userId={myChatId} roomAndProductId={roomAndProductId} setRoomAndProductId={setRoomAndProductId} />
                        </div>

                        <div className='col-span-10 grid md:col-span-6 lg:col-span-7'>
                            {
                                productDetails?.data ?
                                    <>
                                        <div>
                                            <div className='h-fit flex justify-between items-center border-y p-2.5 border-brand-dark bg-white'>
                                                <div className='flex gap-2.5'>
                                                    <div className='w-fit h-fit rounded-full overflow-hidden'>
                                                        <img src={profileVector} className='w-[60px]' alt="" />
                                                    </div>
                                                    <div className='h-fit'>
                                                        <p className='text-md text-brand-primary font-medium'>Posted By</p>
                                                        <h2 className='text-xl text-brand-primary font-medium'>Bilal Memon</h2>
                                                    </div>
                                                </div>
                                                <div className='md:hidden'>
                                                    <Button handleEvent={() => setOpen(true)} btnText={"View Chats"} />
                                                </div>
                                            </div>
                                            <div className='w-full border-b bg-white border-brand-dark grid grid-cols-6 items-center justify-between gap-2.5 p-2.5'>
                                                <div className='flex items-center gap-2.5 col-span-6 sm:col-span-4'>
                                                    <div className='col-span-1 min-w-[60px] max-w-[80px] h-fit overflow-hidden grid items-center justify-center rounded'>
                                                        <img src={productDetails?.data?.mainImage.secure_url} alt="" />
                                                    </div>
                                                    <div className='w-full min-w-[130px] h-fit col-span-3'>
                                                        <p className='text-[10px] sm:text-sm'>{productDetails?.data?.title.slice(0, 36)}...</p>
                                                        <p className='text-sm font-medium sm:text-lg'>Rs {productDetails?.data?.price}</p>
                                                    </div>
                                                </div>
                                                <div className='w-full justify-self-end col-span-6 sm:col-span-2 sm:w-fit'>
                                                    <Button btnPath={`/productdetails/${productId || productChats[0]?.productId}`} btnText={"View Add"} />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            productDetails?.data?.createdBy._id !== myChatId || productChats.length > 0 ?
                                                <>
                                                    <div className='w-full my-2.5 min-h-40 h-fit max-h-72 grid gap-2.5 overflow-y-auto overflow-x-hidden'>
                                                        {
                                                            productChats.length > 0 &&
                                                            <>
                                                                {
                                                                    productChats.map((v, i) => {
                                                                        if (v.senderId === myChatId) {
                                                                            return (
                                                                                <div className='w-fit grid grid-cols-2 gap-5 p-2.5 pl-3.5 h-fit bg-brand-dark justify-self-end rounded-l-lg rounded-tr-lg' key={i}>
                                                                                    <p className='text-md flex items-center'>{v.message}</p>
                                                                                    <p className='justify-self-end flex items-end justify-center text-[10px]'>{moment(v.createdAt).format('h:mm a')}</p>
                                                                                </div>
                                                                            )
                                                                        }
                                                                        else {
                                                                            return (
                                                                                <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-fit bg-white justify-self-start rounded-r-lg rounded-tl-lg sm:w-[250px]' key={i}>
                                                                                    <p className='text-md flex items-center'>{v.message}</p>
                                                                                    <p className='justify-self-end flex items-end justify-center text-[10px]'>{moment(v.createdAt).format('h:mm a')}</p>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                            </>
                                                        }
                                                        {
                                                            messages.length > 0 &&
                                                            messages.map((v, i) => {
                                                                if (v.senderId === myChatId) {
                                                                    return (
                                                                        <div className='w-fit grid grid-cols-2 gap-5 p-2.5 pl-3.5 h-fit bg-brand-dark justify-self-end rounded-l-lg rounded-tr-lg' key={i}>
                                                                            <p className='text-md flex items-center'>{v.message}</p>
                                                                            <p className='justify-self-end flex items-end justify-center text-[10px]'>{moment(v.createdAt).format('h:mm a')}</p>
                                                                        </div>
                                                                    )
                                                                }
                                                                else {
                                                                    return (
                                                                        <div className='w-full grid grid-row-1 p-2.5 pl-3.5 h-fit bg-white justify-self-start rounded-r-lg rounded-tl-lg sm:w-[250px]' key={i}>
                                                                            <p className='text-md flex items-center'>{v.message}</p>
                                                                            <p className='justify-self-end flex items-end justify-center text-[10px]'>{moment(v.createdAt).format('h:mm a')}</p>
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                        < div ref={bottomRef} />
                                                    </div>
                                                    <div className='h-fit grid grid-cols-12 align-baseline'>
                                                        <input type="text" name="search" placeholder="Message" value={input} onChange={(e) => { setInput(e.target.value) }} onKeyDown={(e) => e.key === 'Enter' && handleSendMsg()} className="w-full bg-white rounded-l p-2.5 col-span-10 text-brand-primary focus:outline-none" />
                                                        <div className='col-span-2 bg-white rounded-r p-2.5 pr-5 flex justify-end items-center'>
                                                            <IoSend className='text-lg text-brand-primary cursor-pointer' onClick={handleSendMsg} />
                                                        </div>
                                                    </div>
                                                </> :
                                                <div className='h-fit flex flex-col items-center justify-center'>
                                                    <div className='w-[50%]'>
                                                        <img src={chatVector} alt="" />
                                                    </div>
                                                    <p className='text-center'>Please Select a chat to view conversation</p>
                                                </div>
                                        }
                                    </> :
                                    <div className='h-screen flex flex-col items-center justify-center'>
                                        <div className='w-[50%]'>
                                            <img src={chatVector} alt="" />
                                        </div>
                                        <p className='text-center'>Please Select a chat to view conversation</p>
                                    </div>
                            }



                        </div>
                    </div>
                </div>
            </>
        )
}

export default Chat