import Banner from 'components/Banner';
import TextLink from 'components/TextLink';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, editPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles.scss';

AddEditPage.propTypes = {};

const getPhotoIdFromUrl = url => {
  const photoId = [];
  const arr = url.split('');
  for (let index = arr.length - 1; index >= arr.length - 1 - 3; index--) {
    if (Number.isInteger(Number(arr[index]))) photoId.unshift(arr[index]);
    else break;
  }
  return Number(photoId.join(''));
};

function AddEditPage() {
  const { photoId } = useParams();
  const dispatch = useDispatch();
  const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === Number(photoId)));
  const isAddMode = !photoId;

  const defaultValues = isAddMode
    ? {
        title: '',
        category: null,
        photo: '',
      }
    : editedPhoto;

  const handleSubmit = values => {
    if (isAddMode) {
      const id = getPhotoIdFromUrl(values.photo);
      const action = addPhoto({ ...values, id });
      dispatch(action);
    } else {
      const action = editPhoto(values);
      dispatch(action);
    }
  };

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 😎' />
      {!isAddMode && <TextLink linkTo='/photos/add' text='Add new photo' />}
      <div className='photo-edit__form'>
        <PhotoForm onSubmit={handleSubmit} defaultValues={defaultValues} isAddMode={isAddMode} />
      </div>
    </div>
  );
}

export default AddEditPage;
