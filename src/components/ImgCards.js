import { useState } from 'react'
import React from 'react'
import close from './Close.png'
function ImgCard({ image }) {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
      setOpenModal(true)
    }
    // Close Modal
    const handleCloseModal = () => {
      setOpenModal(false)
    }
    return (
        <>
        {openModal && 
        <div className=' fixed inset-0 z-999 bg-black bg-opacity-90 flex items-center justify-center'>
          <button  className='btnClose fixed top-10 right-10 z-9999' onClick={handleCloseModal}><img className='w-10 z-9999' src={close} alt="" /></button>
          <div className='flex items-center justify-center p-5 m-1 bg-slate-300 border-white rounded-lg'>
            <img src={image.webformatURL} className='rounded-lg' alt='' />
          </div>
        </div>
      }
            <div className='w-full bg-slate-200  border border-r-6 rounded-lg'>
                <div className='m-2 cursor-pointer' onClick={handleOpenModal}>
                        <img src={image.webformatURL} alt="" loading='lazy' className='w-full h-80 object-cover rounded-lg' />
                </div>
                <p className='m-4 text-lg'><strong>Image by:</strong> {image.user}</p>
                <p className='m-4'><strong>Tags:</strong> {image.tags}</p>
                <p className='m-4'><strong>Resolution:</strong> {image.imageHeight} X {image.imageWidth}</p>
            </div>
        </>
    )
}

export default ImgCard
