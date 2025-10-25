import React, { useState } from 'react'
import './Category.css'
import category from '../../Data/Category'

function Category() {
    const [addCategory, setAddCategory] = useState("")
    const [viewCategory, setViewCategory] = useState("")

    let handleClick = () => {
        category.push(addCategory)
    }
  return (
    <div id="categoryContainer">
            <div id="categoryBox">
                <form action="">
                    <div className="inputBox">
                        <label htmlFor="addCategory">Add Category</label>
                        <input type="text" className='inputs' name='addCategory' onChange={(e) => { setAddCategory(e.target.value) }} value={addCategory} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="viewCategory">View Category</label>
                        <select name="category" id="viewCategory" className='inputs' onChange={(e) => { setViewCategory(e.target.value) }} value={viewCategory}>
                            {
                                category.map((v, i) => {
                                    return (
                                        <option value={v} key={i}>{v}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button className='addBtn' onClick={handleClick}>Add</button>
                </form>
            </div>
        </div>
  )
}

export default Category