import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MultipleFilesReader, SingleFileReader } from '../components/ImageReader';
import Button from '../components/Button';

function AddProduct() {
  const [singleSelectedFiles, setSingleSelectedFiles] = useState([]);
  const [singleImagePreviews, setSingleImagePreviews] = useState([]);

  const [multipleSelectedFiles, setMultipleSelectedFiles] = useState([]);
  const [multipleImagePreviews, setMultipleImagePreviews] = useState([]);
  let {category} = useParams()
  let [input, setInput] = useState({ category: category, make: "", title: "", description: "", price: "", location: "" })

  return (
    <div className='w-full grid grid-cols-12'>
      <div className='col-span-10 col-start-2'>
        <h1 className='col-span-3 w-full text-3xl text-center font-semibold my-5 pb-3 text-brand-primary border-b border-brand-light sm:col-span-4'>Post Your Add</h1>

        <form action="/product" className='grid grid-cols-1' method='post' encType='multipart/form-data'>
          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="category" className='py-2.5 text-brand-primary font-medium'>Category</label>
            <input type="text" className='p-2.5 rounded border border-brand-dark' name="category" readOnly value={input.category} required />
          </div>

          <div className='grid grid-cols-1 gap-5 py-5 border-b border-brand-primary'>
            <label htmlFor="mainImage" className='text-brand-primary font-medium'>Product Main Image</label>
            <SingleFileReader inputStyle={"p-2.5 rounded border border-brand-dark"} inputName={"mainImage"} setSelectedFiles={setSingleSelectedFiles} setImagePreviews={setSingleImagePreviews} />
            <div className='w-[60%] flex flex-wrap gap-2.5'>
              <div className='w-[100px] h-[100px] overflow-hidden bg-brand-primary rounded flex items-center justify-center'>
                <img src={singleImagePreviews} alt="" />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-5 py-5 border-b border-brand-primary'>
            <label htmlFor="category" className='text-brand-primary font-medium'>Product Images</label>
            <MultipleFilesReader inputStyle={"p-2.5 rounded border border-brand-dark"} inputName={"images"} setSelectedFiles={setMultipleSelectedFiles} setImagePreviews={setMultipleImagePreviews} />
            <div className='w-[60%] flex flex-wrap gap-2.5'>
              {
                multipleImagePreviews.map((v, i) => {
                  return (
                    <div className='w-[100px] h-[100px] overflow-hidden bg-brand-primary rounded flex items-center justify-center'>
                      <img src={v} alt="" />
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="make" className='py-2.5 text-brand-primary font-medium'>Make</label>
            <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, make: e.target.value })) }} placeholder='Enter Company Name' name="make" value={input.make} />
          </div>

          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="title" className='py-2.5 text-brand-primary font-medium'>Title</label>
            <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, title: e.target.value })) }} placeholder='Enter Title' name="title" value={input.title} />
          </div>

          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="description" className='py-2.5 text-brand-primary font-medium'>Description</label>
            <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, description: e.target.value })) }} placeholder='Enter Description' name="description" value={input.description} />
          </div>

          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="price" className='py-2.5 text-brand-primary font-medium'>Price</label>
            <input type="number" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, price: e.target.value })) }} placeholder='Enter Price' name="price" value={input.price} />
          </div>

          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            {/* <label htmlFor="location" className='py-2.5 text-brand-primary font-medium'>Location</label>
            <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, location: e.target.value })) }} placeholder='Enter Location' name="location" value={input.location} /> */}
            <select
            id="city"
            name="city"
            value={input.location}
            onChange={(e) => { setInput((prev) => ({ ...prev, location: e.target.value })) }}
            className="p-2.5 rounded border border-brand-dark"
          >
            <option value="">Select City</option>
            <option value="karachi">Karachi</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
          </select>
          </div>

          <Button btnPath={"/"} btnText={"Post"} />
        </form>
      </div>

    </div>
  )
}

export default AddProduct