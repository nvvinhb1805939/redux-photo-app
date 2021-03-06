import { Button } from '@mui/material';
import Images from 'constants/images';
import PropTypes from 'prop-types';
import React from 'react';

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
};
RandomPhoto.defaultProps = {
  name: '',
  imageUrl: '',
  onImageUrlChange: null,
};

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/200/300?random=${randomId}`;
};

function RandomPhoto({ name, imageUrl, onImageUrlChange }) {
  const handleRandomPhotoClick = () => {
    if (!onImageUrlChange) return;
    const randomImageUrl = getRandomImageUrl();
    onImageUrlChange(randomImageUrl);
  };

  return (
    <>
      <Button name={name} onClick={handleRandomPhotoClick} variant='outlined' color='secondary' fullWidth>
        Random a photo
      </Button>
      <img
        src={imageUrl || Images.EEMPTY_BG}
        alt='img'
        style={{
          display: 'block',
          maxWidth: '100%',
          marginTop: '30px',
          padding: '30px',
          border: '5px dashed #eee',
          borderRadius: 4,
          objectFit: 'cover',
          aspectRatio: '1',
        }}
      />
    </>
  );
}

export default RandomPhoto;
