import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import PropTypes from 'prop-types';

PhotoItem.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
PhotoItem.defaultProps = {
  photo: {},
  onEditClick: null,
  onDeleteClick: null,
};

function PhotoItem({ photo, onEditClick, onDeleteClick }) {
  const handleEditClick = () => {
    if (!onEditClick) return;
    onEditClick(photo);
  };
  const handleDeleteClick = () => {
    if (!onDeleteClick) return;
    onDeleteClick(photo);
  };

  return (
    <ImageListItem sx={{ position: 'relative' }}>
      <img src={photo.photo} alt='img' loading='lazy' style={{ borderRadius: '4px' }} />
      <ImageListItemBar title={photo.category.label} subtitle={photo.title} />
      <IconButton
        sx={{ position: 'absolute', top: 0, left: 0, color: 'white', background: 'rgba(0, 0, 0, 0.5)' }}
        onClick={handleEditClick}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        sx={{ position: 'absolute', top: 0, right: 0, color: 'white', background: 'rgba(0, 0, 0, 0.5)' }}
        onClick={handleDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
    </ImageListItem>
  );
}

export default PhotoItem;
