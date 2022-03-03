import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage() {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const action = addPhoto(values);
    dispatch(action);
  };

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 😎' />

      <div className='photo-edit__form'>
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
