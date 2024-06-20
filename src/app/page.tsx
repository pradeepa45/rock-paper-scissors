'use client'

import { useContext } from 'react'

import Game from '@/components/RPSGame'
import { ScoreContext } from '@/contexts/score'

export default function Home() {
  // const score = 12
  const score = useContext(ScoreContext)
  return (
    <ScoreContext.Provider value={score}>
      <div className='p-6 max-w-[60rem] mx-auto'>
      <div>
        <div className='border-header-outline border border-solid p-4 rounded-md flex justify-between items-center'>
          <div className='flex flex-col text-white uppercase font-medium text-2xl'>
            <p>Rock</p>
            <p>Paper</p>
            <p>Scissors</p>
          </div>
          <div className='bg-white py-4 px-6 flex flex-col uppercase text-dark-text'>
            <p>Score</p>
            <p className='font-bold text-5xl text-center'>{score}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <Game mode={3} />
      </div>
    </div>
    </ScoreContext.Provider>
  )
}
