import React, { useState }  from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { ethers } from 'ethers';
import Boteros from 'config/boteros';
import NFTBlock from 'assets/block.jpg';
import useStyles from 'config/styles';

const Checker = () => {
  const [botero, setBotero] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [transfers, setTransfers] = useState([]);

  const contractAddress = '0xc6684E23FcDfA7aC095a945F51635025CBfA6efB';
  const provider = new ethers.providers.Web3Provider(window.ethereum);


  async function getBotero() {
    if (  searchQuery !== '' || null ) {
      const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
      const tokenUri = await readOnlyContract.tokenURI(searchQuery);
      const metadata = await fetch(tokenUri.toString())
      const restJson = await metadata.json();
      setBotero(restJson);
      const txevent = await readOnlyContract.filters.Transfer(null, null, Math.floor(searchQuery));
      const eventx = await readOnlyContract.queryFilter(txevent);
      setTransfers(eventx);
      console.log(eventx);
    }
  }

  const classes = useStyles();

  return (
    <>
    <Box display='flex' justifyContent='center'>
    <Typography variant='h4' gutterBottom>
    Insomniac Checker
    </Typography>
    <Box/>
    <input className="input" placeholder="0 to 9,999"
    type="number"
    min="0"
    max="9999"
    value={searchQuery}
    onChange={event => setSearchQuery(event.target.value)}
    >
    </input>
    <button onClick={() => getBotero()}>Search</button>
    </Box>
    <Grid id='rarities' container justifyContent='center' className={classes.gridContainer} spacing={2}>
      <Grid item xs={12} sm={6} lg={3}>
        <img src={botero.image} width={'100%'}/>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Box display='flex' justifyContent='space-between' mb={1}>
          <Typography component='span'>{botero.description}</Typography>
        </Box>
      </Grid>
    </Grid>
    <Box>
            <Typography variant='h4' gutterBottom>
              Transactions
            </Typography>
              {transfers.map((object) => (
                <Box key={object.id} display='flex' justifyContent='space-between' mb={1}>
                  <Typography component='span'>From: {object.args[0]}</Typography>
                  <Typography component='span'>To: {object.args[1]}</Typography>
                </Box>
              ))}
    </Box>
    </>
  );
}

export default Checker
