import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { Start } from '../redux/SettingSlice'
import Diffculty from './Diffculty'
import Numbers from './Number'
import SelectButton from './SelectButton'
import { addRandomArray } from '../redux/SettingSlice'
import { toast } from 'react-toastify'
const Setting = () => {

  const {loading,arrItem,catogry,diffcult,num} = useSelector((state)=> state.item)
  
  const dispatch = useDispatch()

  const {answer=[1,2,3,4]} = arrItem[0] || arrItem

  const HandleStart = ()=>{
 if(catogry=="" || diffcult=="" || num =="" ||  num <= 0 ){
  toast.info("يجب استكمال جميع الحقول")
 }else{
  dispatch(Start({catogry:catogry,diffcult:diffcult,num:num}))
  if(loading === false){
    dispatch(addRandomArray(Array.from(Array(answer.length).keys()))) 
    
  }
 }

  }

  return (
    <div className='col-11 col-sm-10 col-md-8  mx-auto p-2  mt-4 setting'>
    <h3 className='p-2 text-center my-2 text-white'>Quiz App </h3>
      <div className='p-1 mb-2 text-center'>
                
      <SelectButton  />
       <Diffculty />
       <Numbers/>
   
       <div className='mb-3 p-2'>

       <button onClick={HandleStart} className='btn btn-primary w-100'>Start</button>
      
       </div>
      </div>
    </div>
  )
}

export default Setting