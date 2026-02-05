import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory, editCategory, getCategory } from '../../redux/features/category/categoryAction'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { FaEdit } from 'react-icons/fa'
import { MdFileDownloadDone } from 'react-icons/md'

function Category() {
    const [input, setInput] = useState({ categoryId: "", categoryName: "", alsoForHome: false })
    const [open, setOpen] = useState(false)

    const { category, error, loading } = useSelector((state) => state.categorySlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    let handleAdd = async () => {
        await dispatch(addCategory(input))
        setInput({ categoryId: "", categoryName: "", alsoForHome: false })
        dispatch(getCategory())
    }

    let handleEdit = async () => {
        await dispatch(editCategory(input))
        setInput({ categoryId: "", categoryName: "", alsoForHome: false })
        dispatch(getCategory())
    }

    let handleDelete = async () => {
        await dispatch(deleteCategory(input))
        setInput({ categoryId: "", categoryName: "", alsoForHome: false })
        dispatch(getCategory())
    }
    return (
        <div className='w-full bg-black flex items-center justify-center p-3.5 rounded'>
            <div className='w-[90%] flex flex-col gap-5 items-center justify-center'>
                <div className="w-full">
                    <label htmlFor="categoryName" className='text-white'>Add Category</label>
                    <input type="text" className='w-full h-10 text-white bg-[rgb(25,25,25)] p-2.5 border-0 rounded mt-1.5 outline-0' id='categoryName' name='categoryName' onChange={(e) => { setInput((prev) => ({ ...prev, categoryName: e.target.value })) }} value={input.categoryName} />
                </div>
                <div className="w-full">
                    <label htmlFor="alsoForHome" className='text-white'>This Category Also for Home Page</label>
                    <select name="alsoForHome" id="alsoForHome" className='w-full h-10 text-white bg-[rgb(25,25,25)] p-2.5 border-0 rounded mt-1.5 outline-0' onChange={(e) => { setInput((prev) => ({ ...prev, alsoForHome: e.target.value })) }} value={input.alsoForHome}>
                        <option value="false" >False</option>
                        <option value="true" >True</option>
                    </select>
                </div>
                <div className='w-full'>
                    <button className='w-full min-w-fit p-1.5 text-white bg-[rgb(65,65,65)] rounded' onClick={handleAdd}>Add</button>
                </div>
                <p className='text-white underline cursor-pointer' onClick={() => setOpen(true)}>View Categories</p>

                <div>
                    <Dialog open={open} onClose={setOpen} className="relative z-10">
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                        />

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <DialogPanel
                                    transition
                                    className="relative transform overflow-hidden rounded-lg bg-[rgb(25,25,25)] text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[70%] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                                >
                                    <div className="h-[400px] overflow-auto bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <table className="w-full border-collapse overflow-hidden rounded-lg">
                                            <thead className="bg-[rgb(25,25,25)]">
                                                <tr className="text-white text-sm">
                                                    <th className="py-3 px-4 text-left">Category Name</th>
                                                    <th className="py-3 px-4 text-center">Show on Home</th>
                                                    <th className="py-3 px-4 text-center">Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {category?.data?.map((v, i) => (
                                                    <tr
                                                        key={i}
                                                        className="bg-[rgb(35,35,35)] border-b-2 border-black hover:bg-[rgb(45,45,45)] transition"
                                                    >
                                                        <td className="py-3 px-4">
                                                            <input type="text" className="w-full bg-transparent text-white outline-none"
                                                                onChange={(e) => setInput((prev) => ({ ...prev, categoryName: e.target.value }))}
                                                                value={v._id === input.categoryId ? input.categoryName : v.categoryName}
                                                                readOnly={v._id !== input.categoryId}
                                                            />
                                                        </td>

                                                        <td className="py-3 px-4 text-center">
                                                            <select className="bg-[rgb(25,25,25)] text-white px-3 py-1.5 rounded focus:outline-none"
                                                                onChange={(e) => setInput((prev) => ({ ...prev, alsoForHome: e.target.value }))}
                                                            >
                                                                {
                                                                    v._id === input.categoryId ?
                                                                        (
                                                                            v.alsoForHome === true ?
                                                                                <>
                                                                                    <option value="true">True</option>
                                                                                    <option value="false">False</option>
                                                                                </> :
                                                                                <>
                                                                                    <option value="false">False</option>
                                                                                    <option value="true">True</option>
                                                                                </>
                                                                        ) :
                                                                        (
                                                                            v.alsoForHome === true ?
                                                                                <option value="true">True</option> :
                                                                                <option value="false">False</option>
                                                                        )
                                                                }
                                                            </select>
                                                        </td>

                                                        <td className="py-3 px-4">
                                                            <div className="flex justify-center gap-2">
                                                                {
                                                                    v._id !== input.categoryId ?
                                                                        <button
                                                                            className="w-24 p-2.5 flex items-center justify-center bg-[rgb(65,65,65)] hover:bg-[rgb(75,75,75)] rounded text-white transition"
                                                                            onClick={() => {
                                                                                setInput((prev) => ({
                                                                                    ...prev,
                                                                                    categoryId: v._id,
                                                                                    categoryName: v.categoryName,
                                                                                    alsoForHome: v.alsoForHome
                                                                                }))
                                                                            }
                                                                            }
                                                                        >
                                                                            <FaEdit />
                                                                        </button> :
                                                                        <button className="w-24 p-2.5 flex items-center justify-center bg-[rgb(65,65,65)] hover:bg-[rgb(75,75,75)] rounded text-white transition"
                                                                            onClick={handleEdit}
                                                                        >
                                                                            <MdFileDownloadDone className='text-lg' />
                                                                        </button>
                                                                }
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </DialogPanel>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default Category