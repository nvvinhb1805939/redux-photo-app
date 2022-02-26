import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

SelectField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};
SelectField.defaultProps = {
  id: '',
  placeholder: '',
};

function SelectField(props) {
  const { control, name, id, placeholder } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Select
          id={id}
          name={name}
          placeholder={placeholder}
          options={PHOTO_CATEGORY_OPTIONS}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
}

export default SelectField;
