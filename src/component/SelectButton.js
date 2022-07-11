import React from 'react'
import { useDispatch} from 'react-redux'
import { setCatogry } from '../redux/SettingSlice'
const SelectButton = () => {
   
  const dispatch = useDispatch()
  const HandleCatogry = (e)=>{
    dispatch(setCatogry(e.target.value))
  }

  return (
    <div className='mb-3 p-2'>
    <label className='text-white p-1' for="catogry">select catogry :</label>
    <select className="p-1 ml-2 rounded"  onChange={HandleCatogry} >
    <option value="0">select catogry </option>
    <option value="9">general knowledge</option>
    <option value="27">animal</option>
    <option value="23">history</option>
    <option value="21">sports</option>
    <option value="18">science computer</option>
    <option value="17">science Nature</option>
    <option value="19">science Mathematic</option>
    <option value="25">Art</option>
    <option value="26">celebrities</option>
    <option value="24">sports</option>
    <option value="10">Books</option>
    <option value="12">Music</option>
    <option value="11">Film</option>
    <option value="20">Mythology</option>
    <option value="15">Video Games</option>
    <option value="16">Boards Games</option>
    
    </select>
    </div>
  )
}

export default SelectButton