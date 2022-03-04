import PropTypes from 'prop-types';
import React from 'react';
import PhotoItem from '../PhotoItem';

PhotoList.propTypes = {
  list: PropTypes.array,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
PhotoList.defaultProps = {
  list: [],
  onEditClick: null,
  onDeleteClick: null,
};

function PhotoList({ list, onEditClick, onDeleteClick }) {
  return (
    <>
      {list.map(item => (
        <PhotoItem key={item.id} photo={item} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
      ))}
    </>
  );
}

export default PhotoList;
