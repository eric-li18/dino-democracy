import React from 'react'
import { useEffect, useState } from 'react';
import { submitNewDino, getDinoNames, voteOnDino, voteEndTime, winningDino, getEnded, endVote } from '../../lib/apis/dino-voting';
import DinoNames from '../../components/DinoNames';
import Container from '../../components/Container';
import Header from '../../components/Header';

export default function Home({ protocolInfo }) {
  const [dinoNames, setDinoNames] = useState([]);
  const [ended, setEnded] = useState(false);
  const [winningDinoName, setWinningDinoName] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
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
      return formatTime(timeLeft);
    }
    else {
      return "0";
    }
  }
  
  const formatTime = (timeInSeconds) => {
    var minutes = Math.floor(timeInSeconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours - (days*24);
    minutes = minutes-(hours*60)- (days*24*60);
    timeInSeconds = timeInSeconds-(hours*60*60)-(minutes*60)- (days*24*60*60);
    return days + " days " + hours + ":" + minutes + ":" + timeInSeconds;
  }

  const getWinningDino = async () => {
    const winner = await winningDino(protocolInfo);
    setWinningDinoName(winner);
  }

  const endVoteAndGetWinner = async () => {
    const voteEnded = await getEnded(protocolInfo); 
    const votingEndTime = await voteEndTime(protocolInfo);
    let date = new Date(votingEndTime * 1000);
    var seconds = Math.floor((date - (now))/1000);
    setTimeLeft(seconds);

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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000); 
    return () => clearInterval(interval);
  });

  return (
    <Container>
      <Header ended={ended} winningDinoName={winningDinoName} submitNewDinoOnClick={submitNewDinoOnClick} time={getTimeLeft()}/>
      <DinoNames dinoNames={dinoNames} voteOnDinoOnClick={voteOnDinoOnClick} />
    </Container>
  )
}
