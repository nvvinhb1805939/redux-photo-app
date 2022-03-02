import { Container, Grid, Link } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className='header'>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Link
              className='header__link header__title'
              href='https://youtube.com/easyfrontend'
              target='_blank'
              rel='noopener noreferrer'
              color='black'
              underline='none'
            >
              Easy Frontend
            </Link>
          </Grid>
          <Grid container item xs={6} justifyContent='flex-end'>
            <NavLink className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')} to='/photos' end>
              Redux Project
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
