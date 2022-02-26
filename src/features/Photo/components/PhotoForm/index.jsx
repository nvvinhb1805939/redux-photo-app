import InputField from 'components/form-controls/InputField';
import SelectField from 'components/form-controls/SelectField';
import Images from 'constants/images';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: '',
      category: null,
    },
  });

  const onSubmit = data => console.log('submit', data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor='titleId'>Title</Form.Label>
        <InputField control={control} name='title' type='text' id='titleId' placeholder='Eg: Wow nature...' />
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <SelectField control={control} name='category' id='categoryId' placeholder="What's your photo category?" />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='categoryId'>Photo</Form.Label>

        <div>
          <Button type='button' variant='outline-primary'>
            Random a photo
          </Button>
        </div>
        <div>
          <img width='200px' height='200px' src={Images.COLORFUL_BG} alt='colorful background' />
        </div>
      </Form.Group>

      <Form.Group>
        <Button type='submit' color='primary'>
          Add to album
        </Button>
      </Form.Group>
    </Form>
  );
}

export default PhotoForm;
