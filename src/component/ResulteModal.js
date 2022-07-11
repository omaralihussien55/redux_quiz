import React from 'react'

const Resulte = ({children}) => {
  return (
    <div className='modal-result'>
      <div className='modal-content'>
                <div className='modals col-11 col-sm-8 col-md-6 p-2'>
                {children}
                </div>
      </div>
    
    </div>
  )
}

export default Resulte