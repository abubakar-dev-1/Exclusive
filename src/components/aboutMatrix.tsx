import React from 'react'
import { MatrixType } from '@/types/allTypes'
import { MatrixData } from '@/data/aboutMatrixData'
export default function AboutMatrix() {
  return (
    <div className='flex justify-center gap-6 mt-24'>
      {MatrixData.map((matrix: MatrixType) => {
          return(
            <div className='border-[1px] flex flex-col gap-2 items-center w-[270px] h-[230px] py-6 hover:bg-[#DB4444] hover:text-white hover:ease-in-out transition-all'>
                <img src={matrix.image} alt="" />
                <p className='font-bold text-[30px]'>{matrix.price}</p>
                <p>{matrix.description}</p>
            </div>
          )
      })
      }
    </div>
  )
}
