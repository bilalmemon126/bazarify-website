import React, { useEffect, useState } from 'react'
import profileVector from '../assets/profile vector.jpg'
import { FaCircle } from 'react-icons/fa'
import { socket } from '../socket.js'

function ProfileImageCard({ postedByUserId, userFirstName, userLastName, myId }) {

    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(() => {
        const handleOnlineUsers = (users) => {
            setOnlineUsers(users)
        }

        socket.on("onlineUsers", handleOnlineUsers)

        return () => {
            socket.off("onlineUsers", handleOnlineUsers)
        }
    }, [])
    console.log("onlineUsers:", onlineUsers)
    // console.log("postedByUserId:", postedByUserId)
    // console.log(
    //   "includes result:",
    //   onlineUsers.includes(String(postedByUserId))
    // )

    const isOnline = postedByUserId
    ? onlineUsers.includes(String(postedByUserId))
    : false


    return (
        <div className='h-fit flex items-center gap-2.5 p-2.5 bg-white'>
            <div className='w-fit h-fit rounded-full overflow-hidden'>
                <img src={profileVector} className='w-[60px]' alt="" />
            </div>
            <div className='h-fit'>
                <h2 className='text-xl text-brand-primary font-medium'>{userFirstName?.charAt(0).toUpperCase() + userFirstName?.slice(1)} {userLastName?.charAt(0).toUpperCase() + userLastName?.slice(1) || localStorage.getItem("firstName")}</h2>
                <p className='text-[12px] text-brand-primary font-medium'>View Public Profile</p>
                <p className='text-[12px] text-brand-primary font-medium'>
                    <span className='flex items-center gap-1'>
                        <FaCircle
                            className={`text-[10px] ${isOnline ? "text-green-500" : "text-gray-800"}`}
                        />
                        {isOnline ? "Online" : "Offline"}
                    </span>

                </p>
            </div>
        </div>
    )
}

export default ProfileImageCard