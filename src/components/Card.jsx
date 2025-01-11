import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className='w-[250px]'>
    <div className="h-[180px] rounded-[15px] overflow-hidden relative ">
        <img className="object-cover w-full h-full"  src={"http://localhost:5000/images/"+ props.image} alt=""/>
        <div className='image-overlay absolute w-full h-full top-0 flex items-end p-3 text-white font-bold text-xl'>{ props.offer}</div>
    </div>

    </div>
    </>
  )
}
