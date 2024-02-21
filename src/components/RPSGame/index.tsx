import Gesture from './Gesture'

interface Props {
  mode?: number
}

export default function Game({mode}:Props) {
  return (
    <div className={
      `grid grid-rows-1 bg-[url('https://pradeepa45-rps.s3.ap-south-1.amazonaws.com/rock-paper-scissors/images/bg-pentagon.svg')]
        bg-center bg-no-repeat`
      }>
      <div className='flex items-center justify-center'>
      <Gesture name='hand' />
      </div>
      <div className='flex items-center justify-around'>
      <Gesture name='lizard' />
      <Gesture name='paper' />
      </div>
      <div className='flex items-center justify-evenly'>
      <Gesture name='rock' />
      <Gesture name='scissors' />
      </div>
  </div>
  )
}