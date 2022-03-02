import { Autocomplete, TextField } from '@mui/material';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

SelectField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
};
SelectField.defaultProps = {
  id: '',
  label: '',
};

function SelectField(props) {
  const { control, name, id, label, errors } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          options={PHOTO_CATEGORY_OPTIONS}
          renderInput={params => (
            <TextField
              {...params}
              id={id}
              label={label}
              color='secondary'
              size='small'
              error={!!errors[name]?.message}
              helperText={errors[name]?.message}
            />
          )}
          onChange={(event, value) => onChange(value)}
          value={value || null}
          isOptionEqualToValue={(option, value) => option.value === value.value}
        />
      )}
    />
  );
}

export default SelectField;
