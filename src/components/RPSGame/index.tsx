"use client";

import React from "react";
import Gesture from "./Gesture";
import { gameResult, gestures } from "@/constants/gestures";
import Button from "../Button";
import { ScoreContext } from "@/contexts/score"

interface Props {
  mode?: number;
}

export default function Game({ mode = 5 }: Props) {
  const [userPick, setUserPick] = React.useState<string | null>(null);
  const [housePick, setHousePick] = React.useState<string | null>(null);
  const randomPick = () => Math.floor(Math.random() * mode);
  const [result, setResult] = React.useState<string | null>(null);
  let score = React.useContext(ScoreContext)

  const [userScore, setScore] = React.useState(score)

  const handleResult = () => {
    if (!userPick) return null;
    let housePicked = gestures[randomPick()].slug;
    if(userPick === housePicked) {
      housePicked = gestures[randomPick()+1].slug;
    }
    if (userPick !== housePicked) {
      setHousePick(housePicked)
      setResult(gameResult(userPick, housePicked))
      }
    }

    const handlePlayAgain = () => {
    if(result === 'win') setScore(score + 1)
    else if(result === 'lose') setScore(score-1)
    setUserPick(null);
    setHousePick(null);
    setResult(null);
  }

  React.useEffect(() => {
    if (userPick) handleResult();
  }, [userPick, result]);

  if (!userPick) {
    if (mode === 5)
      return (
        <div
          className={`grid grid-rows-1 bg-[url('https://pradeepa45-rps.s3.ap-south-1.amazonaws.com/rock-paper-scissors/images/bg-pentagon.svg')]
            bg-center bg-cover bg-no-repeat gap-1`}
        >
          <div className="flex items-start justify-center">
            <Gesture name="hand" onClick={() => setUserPick("hand")} />
          </div>
          <div className="flex items-center justify-between gap-60">
            <Gesture name="lizard" onClick={() => setUserPick("lizard")} />
            <Gesture name="paper" onClick={() => setUserPick("paper")} />
          </div>
          <div className="flex items-end justify-around">
            <Gesture name="rock" onClick={() => setUserPick("rock")} />
            <Gesture name="scissors" onClick={() => setUserPick("scissors")} />
          </div>
        </div>
      );

    if (mode === 3)
      return (
        <div>
          <div className="flex justify-center gap-5 items-center">
            <Gesture name="paper" onClick={() => setUserPick("paper")} />
            <Gesture name="scissors" onClick={() => setUserPick("scissors")} />
          </div>
          <div className="flex justify-center items-center">
            <Gesture name="rock" onClick={() => setUserPick("rock")} />
          </div>
        </div>
      );
  }

  if (userPick) {
    return (
      <div className="w-full flex items-center justify-evenly py-14 uppercase">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-2xl text-white">You picked</p>
          <Gesture name={userPick} />
          <p className="text-md text-white">{userPick}</p>
        </div>
        {result && (
          <div className="flex flex-col items-center gap-4 uppercase">
            <p className="text-2xl text-white">you {result}!</p>
            <Button success={result==='win'} error={result==='lose'} onClick={handlePlayAgain}>Play again</Button>
          </div>
        )}
        {housePick && (
          <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-2xl text-white">The house picked</p>
          <Gesture name={housePick} />
          <p className="text-md text-white">{housePick}</p>
          </div>
        )}
      </div>
    );
  }
}
