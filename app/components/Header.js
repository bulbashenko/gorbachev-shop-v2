// components/Header.js

"use client"
import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  logo: {
    textDecoration: 'none',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  header: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    textAlign: 'center'
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '5px',
  },
});

const Header = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <header className={classes.header}>
      <div className={classes.left}>
        {!isMobile ? (
          <Link href="/help" className={classes.link}>
            <HelpOutlineIcon className={classes.icon} />
          </Link>
        ) : (
            <Link href="/" className={classes.logo}>
            gorbachev
            </Link>
        )}
      </div>

      {!isMobile && (
        <div className={classes.center}>
            <Link href="/" className={classes.logo}>
            gorbachev
            </Link>
        </div>
      )}

      <div className={classes.right}>
        <Link href="/users" className={classes.link}>
          <PeopleIcon className={classes.icon} />
        </Link>
        <Link href="/shopping-bag" className={classes.link}>
          <ShoppingBagIcon className={classes.icon} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
