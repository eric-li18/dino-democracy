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
      name:  web3.utils.hexToAscii(dinoName.name),
      submitter: dinoName.submitter,
      votes: dinoName.votes
    })
  }
  return dinoNames;
}

export { submitNewDino, getDinoNames }