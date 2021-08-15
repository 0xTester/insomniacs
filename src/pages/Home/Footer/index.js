import React from 'react';

import { Grid, Box, Typography, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';

import useStyles from 'config/styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid id="footer" container className={classes.gridContainer}>
      <Grid item xs={12} className={classes.footer}>
        <Box mb={2}>
          <Typography>
            Verified Implementation Contract:
          </Typography>
          <Typography color='error' className={classes.address}>
            0x91879d131091165BB92ba70296Fd0f81FF59a3Bc
          </Typography>
        </Box>
        <Box>
          <Typography>
            Verified Interface Contract:
          </Typography>
          <Typography color='error' className={classes.address}>
            0x3Fe1a4c1481c8351E91B64D5c398b159dE07cbc5
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.socialButtons}>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <GithubIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer
