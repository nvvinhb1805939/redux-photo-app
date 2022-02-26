import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};
InputField.defaultProps = {
  id: '',
  placeholder: '',
};

function InputField(props) {
  const { control, name, type, id, placeholder } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Form.Control type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value} />
      )}
    />
  );
}

export default InputField;
