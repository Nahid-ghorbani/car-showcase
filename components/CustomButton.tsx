'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';


const CustomButton = (props: CustomButtonProps) => {
  const {title, containerStyles, handleClick} = props
  return (
    <button
    disabled={false}
    type='button'
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
      
      <span className="flex-1">
        {title}
      </span>
    </button>
  )
}

export default CustomButton