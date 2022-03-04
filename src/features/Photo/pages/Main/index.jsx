import { Container, ImageList } from '@mui/material';
import Banner from 'components/Banner';
import TextLink from 'components/TextLink';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos);

  const handleEditClick = photo => {
    navigate(`/photos/${photo.id}`);
  };

  const handleDeleteClick = photo => {
    const action = removePhoto(photo);
    dispatch(action);
  };

  return (
    <div className='photo-main'>
      <Banner title='Your awesome photos 🎉' backgroundUrl={Images.PINK_BG} />
      <TextLink linkTo='add' text='Add new photo' />
      <Container maxWidth='lg'>
        <ImageList cols={4} gap={30}>
          <PhotoList list={photos} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
        </ImageList>
      </Container>
    </div>
  );
}

export default MainPage;
