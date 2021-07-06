const submitNewDino = async (dinoName, protocolInfo) => {
  const { contract, web3, account } = protocolInfo;
  await contract.methods.addDinoName(web3.utils.asciiToHex(dinoName)).send({ from: account });
}

const getDinoNames = async (protocolInfo) => {
  const { contract, web3 } = protocolInfo;
  let dinoNames = [];
  const dinoNamesCount = await contract.methods.dinoNamesCount().call();

  for (var i = 0; i < dinoNamesCount; i++) {
    const dinoName = await contract.methods.dinoNames(i).call();
    dinoNames.push({
      name: web3.utils.hexToAscii(dinoName.name),
      submitter: dinoName.submitter,
      votes: dinoName.votes
    })
  }
  return dinoNames;
}

const voteOnDino = async (votedName, protocolInfo) => {
  const { contract, web3, account } = protocolInfo;
  const name = web3.utils.asciiToHex(votedName);
  await contract.methods.voteDinoName(name).send({from: account});
}

const winningDino = async (protocolInfo) => {
  const { contract, web3 } = protocolInfo;
  const winningName =  await contract.methods.winningName().call();
  return web3.utils.hexToAscii(winningName);
}

const voteEndTime = async (protocolInfo) => {
  const { contract } = protocolInfo;
  return await contract.methods.voteEndTime().call();
}

const getEnded = async (protocolInfo) => {
  const { contract } = protocolInfo;
  return await contract.methods.ended().call();
}
const endVote = async (protocolInfo) => {
  const { contract, account } = protocolInfo;
  return await contract.methods.voteEnd().send({ from : account });
}
  
export { submitNewDino, getDinoNames, voteOnDino, voteEndTime, winningDino, getEnded, endVote }