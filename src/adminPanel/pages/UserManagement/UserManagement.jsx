import { useEffect } from 'react'
import './UserManagement.css'
import { adminEditUsers, adminGetUsers } from '../../../redux/features/adminUser/adminUserAction'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/Button'

function UserManagement() {

    const { adminUsers, error, loading } = useSelector((state) => state.adminUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(adminGetUsers())
    }, [])
    
    const handleBlock = async (userId) => {
        let response = await dispatch(adminEditUsers(userId))
        if(response.payload.status){
            dispatch(adminGetUsers())
        }
        if(!response.payload.status){
            dispatch(adminGetUsers())
        }
    }


    return loading ?
        <p>Loading...</p> :
        (
            <div className='w-full'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className='text-white text-left text-lg bg-black py-2.5 px-12'>Id</th>
                            <th className='text-white text-left text-lg bg-black py-2.5 px-12'>Name</th>
                            <th className='text-white text-left text-lg bg-black py-2.5 px-12'>Email</th>
                            <th className='text-white text-left text-lg bg-black py-2.5 px-12'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            adminUsers.length > 0 && adminUsers.map((v, i) => {
                                return (
                                    <tr key={i} className='bg-[rgb(19,19,19)]'>
                                        <td className='text-[rgb(186,186,186)] py-2.5 px-12 border-b-3 border-[rgb(25,25,25)]'>{v._id}</td>
                                        <td className='text-[rgb(186,186,186)] py-2.5 px-12 border-b-3 border-[rgb(25,25,25)]'>{v.firstName} {v.lastName}</td>
                                        <td className='text-[rgb(186,186,186)] py-2.5 px-12 border-b-3 border-[rgb(25,25,25)]'>{v.email}</td>
                                        <td id='action' className='text-[rgb(186,186,186)] py-2.5 px-12 border-b-3 border-[rgb(25,25,25)]'>
                                            <Button btnText={v.isBlocked ? "UnBlock" : "Block"} btnStyle={"bg-red-500"} handleEvent={() => {handleBlock(v._id)}}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
}

export default UserManagement