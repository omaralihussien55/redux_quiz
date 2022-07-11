import React from 'react'
import { useDispatch} from 'react-redux'
import { setDiffcult } from '../redux/SettingSlice'

const Diffculty = () => {

    const dispatch = useDispatch()
  const HandleDiffcult = (e)=>{
    dispatch(setDiffcult(e.target.id))
  }
  return (
    <div className='mb-3 p-2'>
       <form  onChange={HandleDiffcult}>
         <label className='text-white ml-3'>
          hard
         <input id='hard' type='radio' className='ml-2' name='d'/>
         </label>

         <label className='text-white ml-3'>
         medium
        <input id='medium' type='radio' className='ml-2 ' name='d'/>
        </label>

        <label className='text-white ml-3'>
        easy
       <input id='easy' type='radio' className='ml-2' name='d'/>
       </label>
       </form>
    </div>
  )
}

export default Diffculty