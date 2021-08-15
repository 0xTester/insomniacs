import React, { useState, useEffect } from 'react';

import { Link, AppBar, Box, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Chip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useEthers } from '@usedapp/core';

import NAV_SECTIONS from 'config/nav';
import useStyles from 'config/styles';

const NavBar = () => {
  const classes = useStyles();

  const { activateBrowserWallet, account } = useEthers();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const handleConnectWallet = () => {
    activateBrowserWallet();
  }

  const renderWalletButton = () => {
    if (account) {
      return account && (
        <Chip variant='outlined' label={`${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`} />
      );
    }

    return (
      <Button variant='outlined' onClick={handleConnectWallet}>
        Connect To Wallet
      </Button>
    );
  }

  const renderDesktop = () => {
    return (
      <Toolbar>
        {NAV_SECTIONS.map((nav, i) => (
          <Box ml={3} key={i}>
            <Link color='textPrimary' href={nav.route}>
              {nav.title}
            </Link>
          </Box>
        ))}
        <div className={classes.toolbarButtons}>
          {renderWalletButton()}
        </div>
      </Toolbar>
    );
  };

  const renderMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton aria-label='menu' aria-haspopup='true' edge='start' color='inherit' onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>

        <Drawer anchor='left' open={drawerOpen} onClose={handleDrawerClose}>
          <List>
            {NAV_SECTIONS.map((nav, i) => (
              <ListItem button component='a' href={nav.route} key={i} onClick={handleDrawerClose}>
                <ListItemText>{nav.title}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <div className={classes.toolbarButtons}>
          {renderWalletButton()}
        </div>
      </Toolbar >
    );
  };

  return (
    <AppBar position='static'>
      {mobileView ? renderMobile() : renderDesktop()}
    </AppBar>
  )
}

export default NavBar;