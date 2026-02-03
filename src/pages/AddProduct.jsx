import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MultipleFilesReader, SingleFileReader } from '../components/ImageReader';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, getProductDetails } from '../redux/features/products/productAction';
import { getLocation } from '../redux/features/location/locationAction'

function AddProduct() {
  const [singleImagePreviews, setSingleImagePreviews] = useState([]);
  const [multipleImagePreviews, setMultipleImagePreviews] = useState([]);

  let { categoryName } = useParams()
  let { productId } = useParams()

  localStorage.setItem('productId', productId)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { location } = useSelector((state) => state.locationSlice)

  useEffect(() => {
    dispatch(getLocation())
  }, [])

  let [input, setInput] = useState({
    category: categoryName,
    mainImage: "",
    images: "",
    make: "",
    brand: "",
    bedrooms: "",
    bathrooms: "",
    areaUnit: "",
    area: "",
    fabric: "",
    gender: "",
    title: "",
    description: "",
    price: "",
    condition: "used",
    location: "",
    status: "active"
  })

  useEffect(() => {
    if (productId) {
      dispatch(getProductDetails(productId))
    }
  }, [])

  const { productDetails, productDetailsError, productDetailsLoading } = useSelector((state) => state.products)


  useEffect(() => {
    if (productDetails?.data) {
      setInput((prev) => ({
        ...prev,
        category: categoryName,
        mainImage: productDetails?.data?.mainImage,
        images: productDetails?.data?.images,
        make: productDetails?.data?.make || "",
        brand: productDetails?.data?.brand || "",
        bedrooms: productDetails?.data?.bedrooms || "",
        bathrooms: productDetails?.data?.bathrooms || "",
        areaUnit: productDetails?.data?.areaUnit || "",
        area: productDetails?.data?.area || "",
        fabric: productDetails?.data?.fabric || "",
        gender: productDetails?.data?.gender || "",
        title: productDetails?.data?.title || "",
        description: productDetails?.data?.description || "",
        price: productDetails?.data?.price || "",
        condition: productDetails?.data?.condition || "used",
        location: productDetails?.data?.location._id || "",
        status: productDetails?.data?.status || "active"
      }))
    }
    
    if (productDetails?.data?.mainImage) {
      setSingleImagePreviews(productDetails?.data?.mainImage.secure_url)
    }
    if (productDetails?.data?.images) {
      setMultipleImagePreviews(productDetails?.data?.images)
    }
  }, [productDetails])


  const formData = new FormData()

  formData.append("category", categoryName)
  
  if(input.images.length > 0){
    input.images.forEach((file) => {
      if(file.secure_url){
        formData.append("images", JSON.stringify(file))
      }
      if(!file.secure_url){
        formData.append("images", file)
      }
    })
  }

  if(input.mainImage.secure_url){
    formData.append("mainImage", JSON.stringify(input.mainImage))
  }
  if(!input.mainImage.secure_url){
    formData.append("mainImage", input.mainImage)
  }

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
  formData.append("condition", input.condition)
  formData.append("location", input.location)
  formData.append("status", input.status)
  formData.append("productId", productId)

  // add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(addProduct(formData))

    if (response.payload.status) {
      navigate('/')
    }
  }

  // edit product

  const handleEditProduct = async (e) => {
    e.preventDefault();
    const response = await dispatch(editProduct(formData))

    if (response.payload.status) {
      navigate(`/myads/${localStorage.getItem("userId")}`)
    }
  }

  return productDetailsLoading ?
    <p>loading...</p> :
    (
      <div className='w-full grid grid-cols-12'>
        <div className='col-span-10 col-start-2'>
          <h1 className='col-span-3 w-full text-3xl text-center font-semibold my-5 pb-3 text-brand-primary border-b border-brand-light sm:col-span-4'>Post Your Add</h1>

          <form action="/product" className='grid grid-cols-1' encType='multipart/form-data'>
            <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
              <label htmlFor="category" className='py-2.5 text-brand-primary font-medium'>Category</label>
              <input type="text" className='p-2.5 rounded border border-brand-dark' id='category' name="category" readOnly value={input.category} required />
            </div>

            <div className='grid grid-cols-1 gap-5 py-5 border-b border-brand-primary'>
              <label htmlFor="mainImage" className='text-brand-primary font-medium'>Product Main Image</label>
              <SingleFileReader inputStyle={"p-2.5 rounded border border-brand-dark"} inputName={"mainImage"} setInput={setInput} setImagePreviews={setSingleImagePreviews} />
              <div className='w-[60%] flex flex-wrap gap-2.5'>
                <div className='w-[100px] h-[100px] overflow-hidden bg-brand-primary rounded flex items-center justify-center'>
                  <img src={singleImagePreviews} alt="" />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-5 py-5 border-b border-brand-primary'>
              <label htmlFor="images" className='text-brand-primary font-medium'>Product Images</label>
              <MultipleFilesReader inputStyle={"p-2.5 rounded border border-brand-dark"} inputName={"images"} setInput={setInput} setImagePreviews={setMultipleImagePreviews} />
              <div className='w-[60%] flex flex-wrap gap-2.5'>
                {
                  multipleImagePreviews.map((v, i) => {
                    return (
                      <div className='w-[100px] h-[100px] overflow-hidden bg-brand-primary rounded flex items-center justify-center' key={i}>
                        {
                          v.secure_url ?
                            <img src={v.secure_url} alt="" />
                          :
                            <img src={v} alt="" />
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>

            {
              categoryName == "bike" || categoryName == "car" ?
                <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <label htmlFor="make" className='py-2.5 text-brand-primary font-medium'>Make</label>
                  <input type="text" id='make' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, make: e.target.value })) }} value={input.make}  placeholder='Make' name="make" />
                </div> :
                null
            }

            {
              categoryName == "mobile" || categoryName == "tablet" || categoryName == "electronics" || categoryName == "furniture" || categoryName == "fashion" ?
                <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <label htmlFor="brand" className='py-2.5 text-brand-primary font-medium'>Brand</label>
                  <input type="text" id='brand' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, brand: e.target.value })) }} value={input.brand} placeholder='Enter Brand' name="brand" />
                </div> :
                null
            }

            {
              categoryName == "house" ?
                <>
                  <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                    <label htmlFor="bedrooms" className='py-2.5 text-brand-primary font-medium'>Bedrooms</label>
                    <input type="number" id='bedrooms' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, bedrooms: e.target.value })) }} value={input.bedrooms} placeholder='Enter Bedrooms' name="bedrooms" />
                  </div>

                  <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                    <label htmlFor="bathrooms" className='py-2.5 text-brand-primary font-medium'>Bathrooms</label>
                    <input type="number" id='bathrooms' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, bathrooms: e.target.value })) }} value={input.bathrooms} placeholder='Enter Bathrooms' name="bathrooms" />
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
                      <option value="sqaure feet">Sqaure Feet</option>
                      <option value="sqaure meter">Square Meter</option>
                      <option value="sqaure yards">Square Yards</option>
                    </select>
                  </div>

                  <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                    <label htmlFor="area" className='py-2.5 text-brand-primary font-medium'>Area</label>
                    <input type="number" id='area' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, area: e.target.value })) }} value={input.area} placeholder='Enter Area' name="area" />
                  </div>
                </> :
                null
            }

            {
              categoryName == "fashion" ?
                <>
                  <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                    <label htmlFor="fabric" className='py-2.5 text-brand-primary font-medium'>Fabric</label>
                    <input type="text" id='fabric' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, fabric: e.target.value })) }} value={input.fabric} placeholder='Enter Fabric' name="fabric" />
                  </div>

                  <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                  <label htmlFor="gender" className='py-2.5 text-brand-primary font-medium'>Gender</label>
                    <select
                      name="gender"
                      id='gender'
                      value={input.gender}
                      onChange={(e) => { setInput((prev) => ({ ...prev, gender: e.target.value })) }}
                      className="p-2.5 rounded border border-brand-dark"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </> :
                null
            }


            <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
              <label htmlFor="title" className='py-2.5 text-brand-primary font-medium'>Title</label>
              <input type="text" id='title' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, title: e.target.value })) }} value={input.title} placeholder='Enter Title' name="title" />
            </div>

            <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
              <label htmlFor="description" className='py-2.5 text-brand-primary font-medium'>Description</label>
              <input type="text" id='description' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, description: e.target.value })) }} value={input.description} placeholder='Enter Description' name="description" />
            </div>

            <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
              <label htmlFor="price" className='py-2.5 text-brand-primary font-medium'>Price</label>
              <input type="number" id='price' className='p-2.5 rounded border border-brand-dark' onChange={(e) => { setInput((prev) => ({ ...prev, price: e.target.value })) }} value={input.price} placeholder='Enter Price' name="price" />
            </div>
            
            <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="condition" className='py-2.5 text-brand-primary font-medium'>Condition</label>
              <select
                id="condition"
                name="condition"
                value={input.condition}
                onChange={(e) => { setInput((prev) => ({ ...prev, condition: e.target.value })) }}
                className="p-2.5 rounded border border-brand-dark"
              >
                <option value="used">Used</option>
                <option value="new">New</option>
              </select>
            </div>

            <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
            <label htmlFor="city" className='py-2.5 text-brand-primary font-medium'>City</label>
              <select
                id="city"
                name="city"
                value={input.location}
                onChange={(e) => { setInput((prev) => ({ ...prev, location: e.target.value })) }}
                className="p-2.5 rounded border border-brand-dark"
              >
                <option value="">Select City</option>
                {
                  location?.data?.map((v,i) => {
                    return (
                      <option value={v._id} key={i}>{v.location}</option>
                    )
                  })
                }
              </select>
            </div>

            {
              productId && <div className='grid grid-cols-1 py-5 border-b border-brand-primary'>
                <label htmlFor="status" className='py-2.5 text-brand-primary font-medium'>Status</label>
                <select
                  name="status"
                  id='status'
                  value={input.status}
                  onChange={(e) => { setInput((prev) => ({ ...prev, status: e.target.value })) }}
                  className="p-2.5 rounded border border-brand-dark"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            }

            <Button btnText={"Post"} handleEvent={productId ? handleEditProduct : handleSubmit} />
          </form>
        </div>

      </div>
    )
}

export default AddProduct