import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

function TextLink({ text, linkTo }) {
  return (
    <Grid container justifyContent='center'>
      <Link to={linkTo}>{text}</Link>
    </Grid>
  );
}

export default TextLink;
