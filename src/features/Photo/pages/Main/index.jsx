import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className='photo-main'>
      <Banner title='Your awesome photos 🎉' backgroundUrl={Images.PINK_BG} />

      <Grid container justifyContent='center'>
        <Link to='add'>Add new photo</Link>
      </Grid>
    </div>
  );
}

export default MainPage;
