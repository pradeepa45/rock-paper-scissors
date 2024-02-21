import classNames from 'classnames'
import Image from 'next/image'

import { gestures } from '@/constants/gestures'

interface GestureProps {
  name: string
}

export default function Gesture({name}:GestureProps) {
  const gesture = gestures.find(item => item.slug === name)

  if(!gesture) return null
  
  return (
        <button 
        className={
          classNames(
            'rounded-full p-6 aspect-square w-[180px] overflow-hidden outline-none',
            `bg-[var(--${gesture.slug}-gradient)]`,
            )}>
            
          <div className='p-4 bg-white h-full rounded-full flex flex-col items-center justify-center'>
          <Image src={gesture.image} alt='' fill className='object-contain !relative !h-14'/>
          </div>
        </button>
  )
}