import Game from '@/components/RPSGame'
import { gestures } from '@/constants/gestures'

export default function RockPaperScissors() {
  return (
    <div className='p-6 grid grid-cols-12 relative'>
      <div className='col-start-3 col-span-8 flex flex-col'>
      <div className='p-4 flex justify-between border-2 border-header-outline rounded-lg'>
        <div className='flex flex-col items-start justify-center uppercase text-white'>
          {gestures.map(gesture => (
              <p key={gesture.slug} className='text-xl font-semibold'>{gesture.title}</p>
          ))}
        </div>
        <div className='bg-white rounded-lg px-6 py-4 flex flex-col justify-center gap-2 items-center'>
          <p className='uppercase'>Score</p>
          <p className='text-5xl font-black'>12</p>
        </div>
      </div>
      <Game mode={5} />
      </div>
      <button type='button' className='uppercase text-white outline-none border border-white absolute bottom-10 right-10 px-10 py-2 rounded-lg'>
          Rules
        </button>
    </div>
  ) 
}