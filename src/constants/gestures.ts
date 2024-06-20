export const gestures = [
  {
    title: 'Rock',
    slug: 'rock',
    image: 'https://pradeepa45-rps.s3.ap-south-1.amazonaws.com/rock-paper-scissors/images/icon-rock.svg',
    default: true,
  },
  {
    title: 'Paper',
    slug: 'paper',
    image: 'https://pradeepa45-rps.s3.ap-south-1.amazonaws.com/rock-paper-scissors/images/icon-paper.svg',
    default: true,
  },
  
  {
    title: 'Scissors',
    slug: 'scissors',
    image: 'https://pradeepa45-rps.s3.ap-south-1.amazonaws.com/rock-paper-scissors/images/icon-scissors.svg',
    default: true,
  },
  {
    title: 'Lizard',
    slug: 'lizard',
    image: 'https://pradeepa45-rps.s3.ap-south-1.amazonaws.com/rock-paper-scissors/images/icon-lizard.svg',
    default: false,
  },
  {
    title: 'Spock',
    slug: 'hand',
    image: 'https://pradeepa45-rps.s3.ap-south-1.amazonaws.com/rock-paper-scissors/images/icon-spock.svg',
    default: false,
  },
]

export const gameResult = (userPick: string, housePick: string) => {
  if (userPick === housePick) {
    return 'draw'
  }
  switch (userPick) {
    case 'rock':
      return housePick === 'scissors' || housePick === 'lizard' ? 'win'
      : 'lose'
    break
      
    case 'paper':
      return housePick === 'rock' || housePick === 'spock' ? 'win'
      : 'lose'
      break

    case 'scissors':
      return housePick === 'paper' || housePick === 'lizard' ? 'win'
      : 'lose'
      break
    
    case 'spock':
      return housePick === 'scissors' || housePick === 'rock' ? 'win'
      : 'lose'
      break
    
    case 'lizard':
      return housePick === 'spock' || housePick === 'paper' ? 'win'
      : 'lose'
      break

    default:
      return null
  }
}