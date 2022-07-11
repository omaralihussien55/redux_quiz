import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import Quiz from './component/Quiz';
import Setting from './component/Setting';
import Resulte from './component/ResulteModal';
 // "homepage":"https://omaralihussien55.github.io/quiz-react/",
//      "predeploy":"npm run build",
// "deploy":"gh-pages -d build",
const App = () => {
  const [changeModalStart ,setChangeModalStart] = useState(true)
  // const [errorData , setErrorData] = useState(false)
  const {loading,arrItem,conect} = useSelector((state)=> state.item)
  const startModal = ()=>{
    setChangeModalStart(false)
  }
  return (
    <div>
<ToastContainer/>

  {arrItem.length > 0 ?<Quiz  setChangeModalStart={setChangeModalStart}/> 
  :<Setting/>}
  

  {loading && (
      <Resulte>
      <div className='p-2 bg-white shadow-lg text-center col-11 col-sm-8 col-md-6'>
      <p className='p-2 m-3 text-center text-success'>Loading ... </p>
      </div>
      </Resulte>
      
   )}  
   
   {!conect && (
    <Resulte>
    <div className='p-2 bg-white shadow-lg text-center col-11 col-sm-8 col-md-6'>
    <p className='p-2 m-3 text-center text-danger'>connection error or api</p>
    </div>
    </Resulte>
    
 )}  

{changeModalStart && (
<Resulte>
<div className='p-2 bg-white shadow-lg text-center' style={{height:"50px"}}>
<button className='btn btn-success' onClick={startModal}>Quiz Start </button>
</div>
</Resulte>
)}

    </div>
  );
};

export default App;