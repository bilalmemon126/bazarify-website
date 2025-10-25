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
            <div id="userManagementContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            adminUsers.length > 0 && adminUsers.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{v._id}</td>
                                        <td>{v.firstName} {v.lastName}</td>
                                        <td>{v.email}</td>
                                        <td id='action'>
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