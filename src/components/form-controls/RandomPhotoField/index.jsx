import { ErrorMessage } from '@hookform/error-message';
import RandomPhoto from 'components/RandomPhoto';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

RandomPhotoField.propTypes = {
  setValue: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  name: PropTypes.string,
};
RandomPhotoField.defaultProps = {
  name: '',
};

function RandomPhotoField({ setValue, control, name, errors, clearErrors }) {
  const handleImageUrlChange = newImageUrl => {
    setValue(name, newImageUrl);
    clearErrors(name);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value } }) => (
        <>
          <RandomPhoto imageUrl={value} onImageUrlChange={handleImageUrlChange} />
          {errors[name] && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <p
                  style={{
                    color: '#d32f2f',
                    fontSize: 12,
                    marginLeft: 14,
                    marginTop: 4,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    letterSpacing: '0.03333em',
                    width: '100%',
                  }}
                >
                  {message}
                </p>
              )}
            />
          )}
        </>
      )}
    />
  );
}

export default RandomPhotoField;
