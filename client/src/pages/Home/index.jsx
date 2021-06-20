import React from 'react'
import { useEffect, useState } from 'react';
import { submitNewDino, getDinoNames } from '../../lib/apis/dino-voting';
import NewDino from '../../components/NewDino';
import DinoNames from '../../components/DinoNames';

export default function Home({ protocolInfo }) {
  const [dinoNames, setDinoNames] = useState([]);

  const refreshDinoNames = async () => {
    const names = await getDinoNames(protocolInfo);
    setDinoNames(names);
  }

  const submitNewDinoOnClick = async (dinoName) => {
    await submitNewDino(dinoName, protocolInfo);
    await refreshDinoNames();
  }

  useEffect(() => {
    refreshDinoNames();
  }, []);
  
  return (
    <div>
      <DinoNames dinoNames={dinoNames} />
      <NewDino submitNewDinoOnClick={submitNewDinoOnClick} />
    </div>
  )
}
