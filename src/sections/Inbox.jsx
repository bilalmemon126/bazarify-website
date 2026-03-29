import React, { use, useEffect, useState } from 'react'
import chatVector from '../assets/chat vector.png'
import profileVector from '../assets/profile vector.jpg'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { socket } from '../socket'
import { useNavigate } from 'react-router-dom'

function Inbox({ userId, setOpen, setRoomAndProductId }) {
    const [chatNotificationsCount, setChatNotificationsCount] = useState({})
    const { allChats, chatNotifications } = useSelector((state) => state.chat)

    let navigate = useNavigate()

    let handleUnreadMessage = (messageRoomId) => {
        setChatNotificationsCount((prev) => ({
            ...prev,
            [messageRoomId]: (prev[messageRoomId] || 0) + 1
        }))
    }

    useEffect(() => {
        socket.on("receiveNotification", handleUnreadMessage)

        return () => {
            socket.off("receiveNotification", handleUnreadMessage)
        }
    }, [])


    let handleSelectChat = (userId, productId, buyerId) => {
        navigate(`/chat/${userId}`)
        const found = allChats?.find(v => v.productId._id === productId && v.buyerId._id === buyerId)
        const roomId = found?.roomId
        setRoomAndProductId((prev) => ({ ...prev, roomId: roomId, productId: productId }))
    }


    return (
        <div className='w-full h-fit'>
            <div className='w-full h-[100px] grid items-center p-2.5 border-b shadow border-brand-dark mb-2.5'>
                <h1 className='text-center text-3xl font-medium'>INBOX</h1>
            </div>
            <div className='min-h-72 h-fit max-h-112 overflow-auto grid'>
                {allChats.length > 0 ?
                    allChats.map((v, i) => {
                        let count = chatNotifications.filter(value => value.chatRoomId === v.roomId).length
                        console.log(count)
                        return (
                            <div
                                className='w-full max-w-72 justify-self-center h-fit flex gap-2.5 border-b items-center justify-between p-2.5 border-brand-dark bg-white cursor-pointer'
                                onClick={() => { handleSelectChat(userId, v.productId._id, v.buyerId._id); setOpen ? setOpen(false) : "" }}
                                key={i}
                            >
                                <div className='flex w-fit h-fit items-center gap-2.5'>
                                    <div className='w-fit h-fit rounded-full overflow-hidden'>
                                        <img src={profileVector} className='w-[60px]' alt="" />
                                    </div>
                                    <div className='h-fit'>
                                        <p className={`text-md text-brand-primary ${count > 0 || chatNotificationsCount[v.roomId] > 0 ? "font-medium" : "font-normal"}`}>
                                            {v.buyerId._id !== userId
                                                ? `${v.buyerId.firstName} ${v.buyerId.lastName}`
                                                : `${v.sellerId.firstName} ${v.sellerId.lastName}`}
                                        </p>
                                        <h2 className={`text-sm text-brand-primary ${count > 0 || chatNotificationsCount[v.roomId] > 0 ? "font-medium" : "font-normal"}`}>
                                            {v.productId.title.length > 36
                                                ? `${v.productId.title.slice(0, 36)}...`
                                                : v.productId.title}
                                        </h2>
                                    </div>
                                </div>
                                <div className='w-fit h-full self-end flex flex-col gap-1.5 items-center'>
                                    {count > 0 && (
                                        <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center bg-[#2073f0]'>
                                            <p className='text-[12px] text-white'>{count + (chatNotificationsCount[v.roomId] || 0)}</p>
                                        </div>
                                    )}
                                    <p className='text-[10px]'>{moment(v.createdAt).format('h:mm a')}</p>
                                </div>
                            </div>
                        )
                    }) :
                    (
                        <div className='h-fit flex flex-col items-center justify-center'>
                            <div className='w-[50%]'>
                                <img src={chatVector} alt="" />
                            </div>
                            <p className='text-center'>There is no Chats Available</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Inbox