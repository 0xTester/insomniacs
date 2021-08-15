import React from 'react';

import { Grid, Box, Typography } from '@material-ui/core';

import NFTBlock from 'assets/block.jpg';
import useStyles from 'config/styles';

const Rarity = () => {
  const rarities = [
    { title: 'Total Boteros', value: 10000 },
    { title: 'Faces', value: 24 },
    { title: 'Hair styles', value: 12 },
    { title: 'Clothes', value: 2 },
    { title: 'Skins', value: 12 },
    { title: 'Eyes', value: 45 },
    { title: 'Devils', value: 12 },
    { title: 'Clowns', value: 12 },
    { title: 'Fast Food Workers', value: 45 },
    { title: 'Bald Guys', value: 12 },
  ];

  const classes = useStyles();

  return (
    <Grid id='rarities' container justifyContent='center' className={classes.gridContainer} spacing={4}>
      <Grid item xs={12} sm={6} lg={3}>
        <img src={NFTBlock} width={'100%'} alt='nft-block' />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Typography variant='h4' gutterBottom>
          Rarity
        </Typography>
        <Box>
          {rarities.map(({ title, value }, i) => (
            <Box key={i} display='flex' justifyContent='space-between' mb={1}>
              <Typography component='span'>{value}</Typography>
              <Typography component='span'>{title}</Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Rarity
