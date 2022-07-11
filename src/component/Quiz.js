import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Resulte from './ResulteModal'
import { addRandomArray,changArrayItem,setDiffcult,setCatogry,setNum} from '../redux/SettingSlice'




const Quiz = ({setChangeModalStart}) => {

    
    const {arrItem,arrRandom} = useSelector((state)=> state.item)
    const dispatch = useDispatch()
    const [count ,setCount ] = useState(0)
    const [scored ,setScored ] = useState(0)
    const {question ="",answer=[],correct_answer =""} = arrItem[count] || arrItem
     const [btnshow,setBtnshow] = useState(false)
     const [changeModal,setChangeModal] = useState(false)
     const [pointer,setPointer] = useState(false)
  const answerRef = useRef(null)

    const HandleId = (e)=>{
      let id = e.target.id;
      let answer = e.target.dataset.answer
      setBtnshow(true)
      if(id == answer){
        e.target.style.backgroundColor="green"
        e.target.style.color="white"
       
        setScored(scored + 1)
      }else{
        e.target.style.backgroundColor="red"
        e.target.style.color="white"
      }

    
       setPointer(true)
}


    const HandleNext =()=>{
   dispatch(addRandomArray(Array.from(Array(answer.length).keys())))
      if(count >= arrItem.length - 1){
         setChangeModal(true)
        
    
      }else{
           setCount(count + 1)

          setBtnshow(false)
        }

 
          answerRef.current.childNodes.forEach(i => {
           i.style.backgroundColor="rgba(11, 127, 152, 0.3)"
           i.style.color="black"
          });

        setPointer(false)

}

    const HandleCloseModal = ()=>{
      setChangeModal(false)
      setCount(0)
      setScored(0)
      setPointer(false)
      dispatch(changArrayItem())
      setChangeModalStart(true)
      dispatch(setDiffcult(""))
      dispatch(setCatogry(""))
      dispatch(setNum(""))
    }

  return (
    
    <div className='col-11 p-0 col-sm-10 col-md-8  mx-auto mt-4  quiz '>
        <div>
        <h3 className='my-3 p-2 title-quiz text-white'>{question}</h3>
        <div style={{height:"40px"}} className="p-2 text-center text-white">
            {`${count+1}/${arrItem.length}`}
        </div>
        <ul ref={answerRef} style={{pointerEvents:pointer && "none"}} className="d-flex flex-column p-3 ">
        {
         answer && answer.map((item,idx)=>{
             return(
                 <React.Fragment key={idx}>
                  {
                    item && (
                     <li style={{order: idx && arrRandom[idx]}}    className='p-2 mb-2 border rounded text-center li-answer' onClick={HandleId} data-answer={correct_answer} id={item}>
                     {item}
                     </li>
                   )}
                 </React.Fragment>
             )
          })
         
         }
     </ul>
 <div style={{height:"40px"}}>
 {btnshow && <button className='btn btn-success w-100 ' onClick={HandleNext}>next</button>}
       
 </div>
</div>


{changeModal && ( <Resulte>
  <div className='p-2 bg-white shadow-lg text-center'>
  <p className='p-2 mb-2'>{`You  score ${scored} out of ${arrItem.length}`}</p>
  <button className='btn btn-danger' onClick={HandleCloseModal}>close</button>
  </div>
  </Resulte>)}
    </div>
  )
}

export default Quiz