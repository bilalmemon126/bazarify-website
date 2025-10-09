import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MultipleFilesReader, SingleFileReader } from '../components/ImageReader';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/features/products/productAction';

function AddProduct() {
  const [singleSelectedFiles, setSingleSelectedFiles] = useState([]);
  const [singleImagePreviews, setSingleImagePreviews] = useState([]);

  const [multipleSelectedFiles, setMultipleSelectedFiles] = useState([]);
  const [multipleImagePreviews, setMultipleImagePreviews] = useState([]);
  let { category } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  let [input, setInput] = useState({ category: category, mainImage: singleSelectedFiles, images: multipleSelectedFiles, make: "", brand: "", bedrooms: "", bathrooms: "", areaUnit: "", area: "", fabric: "", gender: "", title: "", description: "", price: "", location: "" })

  const formData = new FormData()
  formData.append("category", input.category)
  if (singleSelectedFiles.length > 0) {
    formData.append("mainImage", singleSelectedFiles[0])
  }
  multipleSelectedFiles.forEach((file) => {
    formData.append("images", file)
  })

  formData.append("mainImage", singleSelectedFiles)
  formData.append("make", input.make)
  formData.append("brand", input.brand)
  formData.append("bedrooms", input.bedrooms)
  formData.append("bathrooms", input.bathrooms)
  formData.append("areaUnit", input.areaUnit)
  formData.append("area", input.area)
  formData.append("fabric", input.fabric)
  formData.append("gender", input.gender)
  formData.append("title", input.title)
  formData.append("description", input.description)
  formData.append("price", input.price)
  formData.append("location", input.location)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(addProduct(formData))
    console.log(response.payload)

    if (response.payload.status) {
      navigate('/')
    }
  }
  // let [input, setInput] = useState({ category: category, make: "", title: "", description: "", price: "", location: "" })

  return (
    <div className='w-full grid grid-cols-12'>
      <div className='col-span-10 col-start-2'>
        <h1 className='col-span-3 w-full text-3xl text-center font-semibold my-5 pb-3 text-brand-primary border-b border-brand-light sm:col-span-4'>Post Your Add</h1>

        <form action="/product" className='grid grid-cols-1' encType='multipart/form-data'>
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
                    <div className='w-[100px] h-[100px] overflow-hidden bg-brand-primary rounded flex items-center justify-center' key={i}>
                      <img src={v} alt="" />
                    </div>
                  )
                })
              }
            </div>
          </div>

          {
            category == "bike" || category == "car" ?
              <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                <label htmlFor="make" className='py-2.5 text-brand-primary font-medium'>Make</label>
                <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, make: e.target.value })) }} placeholder='Make' name="make" />
              </div> :
              null
          }

          {
            category == "mobile" || category == "tablet" || category == "electronics" || category == "furniture" || category == "fashion" ?
              <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                <label htmlFor="brand" className='py-2.5 text-brand-primary font-medium'>Brand</label>
                <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, brand: e.target.value })) }} placeholder='Enter Brand' name="brand" />
              </div> :
              null
          }

          {
            category == "house" ?
              <>
                <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <label htmlFor="bedrooms" className='py-2.5 text-brand-primary font-medium'>Bedrooms</label>
                  <input type="number" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, bedrooms: e.target.value })) }} placeholder='Enter Bedrooms' name="bedrooms" />
                </div>

                <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <label htmlFor="bathrooms" className='py-2.5 text-brand-primary font-medium'>Bathrooms</label>
                  <input type="number" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, bathrooms: e.target.value })) }} placeholder='Enter Bathrooms' name="bathrooms" />
                </div>

                <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <select
                    name="areaUnit"
                    value={input.areaUnit}
                    onChange={(e) => { setInput((prev) => ({ ...prev, areaUnit: e.target.value })) }}
                    className="p-2.5 rounded border border-brand-dark"
                  >
                    <option value="">Select Area Unit</option>
                    <option value="kanal">Kanal</option>
                    <option value="marla">Marla</option>
                    <option value="sqaureFeet">Sqaure Feet</option>
                    <option value="sqaureMeter">Square Meter</option>
                    <option value="sqaureYards">Square Yards</option>
                  </select>
                </div>

                <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <label htmlFor="area" className='py-2.5 text-brand-primary font-medium'>Area</label>
                  <input type="number" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, area: e.target.value })) }} placeholder='Enter Area' name="area" />
                </div>
              </> :
              null
          }

          {
            category == "fashion" ?
              <>
                <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <label htmlFor="fabric" className='py-2.5 text-brand-primary font-medium'>Fabric</label>
                  <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, fabric: e.target.value })) }} placeholder='Enter Fabric' name="fabric" />
                </div>

                <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <label htmlFor="gender" className='py-2.5 text-brand-primary font-medium'>Gender</label>
                  <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, gender: e.target.value })) }} placeholder='Gender' name="gender" />
                </div>
              </> :
              null
          }


          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="title" className='py-2.5 text-brand-primary font-medium'>Title</label>
            <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, title: e.target.value })) }} placeholder='Enter Title' name="title" />
          </div>

          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="description" className='py-2.5 text-brand-primary font-medium'>Description</label>
            <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, description: e.target.value })) }} placeholder='Enter Description' name="description" />
          </div>

          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="price" className='py-2.5 text-brand-primary font-medium'>Price</label>
            <input type="text" className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, price: e.target.value })) }} placeholder='Enter Price' name="price" />
          </div>

          <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
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

          <Button btnText={"Post"} handleEvent={handleSubmit} />
        </form>
      </div>

    </div>
  )
}

export default AddProduct