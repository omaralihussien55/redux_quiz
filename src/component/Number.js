import React from 'react'
import { useDispatch} from 'react-redux'
import { setNum } from '../redux/SettingSlice'
const Numbers = () => {


  const dispatch = useDispatch()

  const HandleNum = (e)=>{
   dispatch(setNum(e.target.value))
  }

  return (
    <div className='mb-3 p-2'>
    <label className='text-white'>
    number of questions :
      <input type="number" id='num'  className='p-1 ml-2 mb-2 ' onChange={HandleNum} />
      <span style={{display:"block",fontSize:"8px"}} className="text-white text-right "><span className='text-danger m-2'>*</span>There is a maximum number of questions </span>

      </label>

    </div>
  )
}

export default Numbers