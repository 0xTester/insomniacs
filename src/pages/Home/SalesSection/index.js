import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, Box } from '@material-ui/core';
import { ethers } from 'ethers';

import useStyles from 'config/styles';
import Boteros from 'config/boteros';

const SalesCard = (props) => {
  const classes = useStyles();
  const { title, count, amount, onMintNow } = props
  return (
    <Card style={{ borderRadius: 18, border: '2px solid #ccc', padding: 24 }} >
      <CardContent>
        <Typography color="textSecondary" gutterBottom align='center' variant='h4'>
          {title}
        </Typography>
        <Typography component="p" align='center'>
          {count} Botero
          <br />
          {amount.toFixed(2)} ETH
        </Typography>
        <Box display='flex' m={3} justifyContent='center'>
          <Button size="small" color='secondary' variant='outlined' onClick={onMintNow}>Mint now</Button>
        </Box>
        <Typography variant='body2' component="p" align='center' className={classes.perBotero} >
          {parseFloat(amount / count).toFixed(2)} per Botero
        </Typography>
      </CardContent>
    </Card>
  );
}

const SalesSection = () => {
  const classes = useStyles();
  const [botCount, setBotCount] = useState(0); //RE-view THIS FUNCTION

  const contractAddress = '0xF17Ba26ccEAD7b5360fa3f7D0D255e6917b5aD70';
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const askMintBoteros = async () => {
    const signer = provider.getSigner();
    const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
    const writeContract = new ethers.Contract(contractAddress, Boteros, signer);
    const txResponse = await writeContract.mintOneBotero({ value: ethers.utils.parseEther('0.1') });
  }

  const mintBotero = async () => {
    const mint1BoteroGasTotal = Math.floor(244658 * 1.2);
    const signer = provider.getSigner();
    const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
    const writeContract = new ethers.Contract(contractAddress, Boteros, signer);

    try {
      const txResponse = await writeContract.mintOneBotero({ value: ethers.utils.parseEther('0.1'), gasLimit: 293589 });
      console.log('Transaction success!');
      if (typeof txResponse !== 'undefined') {
        const txReceipt = await txResponse.wait();
      }
      setBotCount(botCount + 1); //RE-VIEW
    } catch (e) {
      console.log(e);
    }
  }

  const mintTBotero = async () => {
    const { accountAddress } = window;
    const mint1BoteroGasTotal = Math.floor(244658 * 1.2);
    const signer = provider.getSigner();
    const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
    const writeContract = new ethers.Contract(contractAddress, Boteros, signer);

    try {
      const txResponse = await writeContract.mintThreeBotero({ value: ethers.utils.parseEther('0.24'), gasLimit: 686613 });
      console.log('Transaction success!');
      if (typeof txResponse !== 'undefined') {
        const txReceipt = await txResponse.wait();
      }
      setBotCount(botCount + 3); //RE-VIEW
    } catch (e) {
      console.log(e);
    }
  }

  const mintFBotero = async () => {
    const { accountAddress } = window;
    const mint1BoteroGasTotal = Math.floor(244658 * 1.2);
    const signer = provider.getSigner();
    const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
    const writeContract = new ethers.Contract(contractAddress, Boteros, signer);

    try {
      const txResponse = await writeContract.mintFiveBotero({ value: ethers.utils.parseEther('0.4'), gasLimit: 2003522 });
      console.log('Transaction success!');

      if (typeof txResponse !== 'undefined') {
        const txReceipt = await txResponse.wait();
      };
      setBotCount(botCount + 5); //RE-VIEW
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box className={classes.gridContainer}>
      <Typography variant='h4' align='center' gutterBottom>
        2000 of 3000 sold
      </Typography>
      <Grid container justifyContent='center' spacing={4} className={classes.salesSection}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SalesCard title='Solo' count={1} amount={0.10} onMintNow={mintBotero} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SalesCard title='3 Pack' count={3} amount={0.24} onMintNow={mintTBotero} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SalesCard title='Rolling Deep' count={10} amount={0.7} onMintNow={mintFBotero} />
        </Grid>
      </Grid>
      <Box display='flex' justifyContent='center' mt={3}>
        <Button variant='contained' color='secondary' size='large'>View on OpenSea</Button>
      </Box>
    </Box>
  );
}

export default SalesSection
