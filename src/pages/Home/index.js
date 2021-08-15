import React from 'react';
import { Container } from '@material-ui/core';

import useStyles from 'config/styles';

import SalesSection from './SalesSection';
import GallerySlide from './GallerySlide';
import Rarity from './Rarity';
import Checker from './Checker';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <SalesSection />
      <GallerySlide />
      <Rarity />
      <Checker />
      <FAQ />
      <Footer />
    </Container>
  );
}

export default Home
