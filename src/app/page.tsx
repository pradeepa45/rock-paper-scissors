import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className='h-20 bg-purple-300'>Some header</div>
      <p>Hello</p>
      <Link href='/rock-paper-scissors'>
        Rock Paper and Scissors
      </Link>
    </div>
  );
}
