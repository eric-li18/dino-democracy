import React from 'react'
import { useEffect, useState } from 'react';
import { submitNewDino, getDinoNames, voteOnDino, voteEndTime, winningDino, getEnded, endVote } from '../../lib/apis/dino-voting';
import NewDino from '../../components/NewDino';
import DinoNames from '../../components/DinoNames';

export default function Home({ protocolInfo }) {
  const [dinoNames, setDinoNames] = useState([]);
  const [endTime, setEndtime] = useState(0);
  const [ended, setEnded] = useState(false);
  const [winningDinoName, setWinningDinoName] = useState("");
  const now = new Date();

  const refreshDinoNames = async () => {
    const names = await getDinoNames(protocolInfo);
    setDinoNames(names);
  }

  const submitNewDinoOnClick = async (dinoName) => {
    await submitNewDino(dinoName, protocolInfo);
    await refreshDinoNames();
  }

  const voteOnDinoOnClick = async (dinoName) => {
    await voteOnDino(dinoName, protocolInfo);
    await refreshDinoNames();
  }

  const getTimeLeft = () => {
    if (!ended) {
      var seconds = Math.floor((endTime - (now))/1000);
      var minutes = Math.floor(seconds/60);
      var hours = Math.floor(minutes/60);

      minutes = minutes-(hours*60);
      seconds = seconds-(hours*60*60)-(minutes*60);
      return hours + ":" + minutes + ":" + seconds;
    }
    else {
      return "0";
    }
  }

  const getWinningDino = async () => {
    const winner = await winningDino(protocolInfo);
    setWinningDinoName(winner);
  }

  const endVoteAndGetWinner = async () => {
    const voteEnded = await getEnded(protocolInfo); 
    const endTime = await voteEndTime(protocolInfo);
    let date = new Date(endTime * 1000);
    setEndtime(date)

    if (date < now) {
      if (!voteEnded) {
       await endVote(protocolInfo);
      }
      setEnded(true);
      getWinningDino();
    }
  }
 
  useEffect(() => {
    endVoteAndGetWinner();
    refreshDinoNames();
    // getWinningDino();
  }, []);

  return (
    <div>
      { !ended && <h3>Time left: { getTimeLeft() }</h3> }
      { ended && (
        <div>
          { winningDinoName ? <h1>Winning Dino: {winningDinoName} </h1> : <h1>No Winner</h1>}
        </div>
      )}
      <DinoNames dinoNames={dinoNames} voteOnDinoOnClick={voteOnDinoOnClick} />
      <NewDino submitNewDinoOnClick={submitNewDinoOnClick} />
    </div>
  )
}
