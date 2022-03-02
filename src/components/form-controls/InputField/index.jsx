import { ErrorMessage } from '@hookform/error-message';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
};
InputField.defaultProps = {
  id: '',
  label: '',
};

function InputField(props) {
  const { control, name, id, label, errors } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          <TextField
            id={id}
            value={value}
            onChange={onChange}
            label={label}
            color='secondary'
            size='small'
            fullWidth
            error={!!errors[name]?.message}
            helperText={errors[name]?.message}
          />
        </>
      )}
    />
  );
}

export default InputField;
