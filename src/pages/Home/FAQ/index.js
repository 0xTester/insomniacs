import React from 'react';

import { Grid, Box, Typography, Card } from '@material-ui/core';

import useStyles from 'config/styles';

const FAQ = () => {
  const items = [
    {
      question: 'How were the ducks generated?',
      answer: 'Brainchild of celebrated artist @frankynines, each duck was procedurally generated from a collection of hand drawn items.',
    },
    {
      question: 'What determines the duck I get?',
      answer: 'Each SupDuck egg is genetically constructed the moment you send a transaction. We use an on-chain set of traits and random numbers. Give it a couple minutes to hatch.',
    },
    {
      question: 'Where can I cop some sweet merch?',
      answer: 'Stay tuned friends!',
    },
    {
      question: 'What can my Sup Duck do?',
      answer: 'It grants you legendary status, what else do you need?',
    },
    {
      question: 'Anything else I should know?',
      answer: 'Yes, you need some ETH. You can buy it on Coinbase or even directly from the Metamask Wallet.',
    },
    {
      question: 'What is an NFT?',
      answer: 'It stands for non-fungible token which is nerd speak for a unique one of kind item that is provably rare. Think baseball cards on steroids.',
    },
  ];

  const classes = useStyles();

  return (
    <Grid id='faq' container justifyContent='center' className={classes.gridContainer}>
      <Grid item xs={12} sm={8}>
        <Typography variant='h4' gutterBottom>
          FAQ
        </Typography>
        <Box>
          {items.map(({ question, answer }, i) => (
            <Card key={i} variant='outlined' className={classes.faqCard}>
              <Typography gutterBottom>
                {question}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {answer}
              </Typography>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default FAQ
