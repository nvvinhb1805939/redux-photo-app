import { Button, Grid } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import RandomPhotoField from 'components/form-controls/RandomPhotoField';
import SelectField from 'components/form-controls/SelectField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm() {
  console.log('render');
  const schema = yup
    .object()
    .shape({
      title: yup
        .string()
        .trim()
        .required('This field is required!')
        .min(4, 'This contains at least 4 characters!')
        .max(20, 'This contains up to 20 characters!'),
      category: yup.object().nullable().required('This field is required!'),
      photo: yup.string().when('category', {
        is: ({ value }) => value == 2,
        then: yup.string().notRequired(),
        otherwise: yup.string().required('This field is required!'),
      }),
    })
    .required();

  const {
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      category: null,
      photo: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('submit', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction='column' rowSpacing='30'>
        <Grid item>
          <InputField control={control} name='title' id='titleId' label='Title' errors={errors} />
        </Grid>
        <Grid item>
          <SelectField control={control} name='category' id='categoryId' label='Category' errors={errors} />
        </Grid>
        <Grid container item justifyContent='center'>
          <RandomPhotoField
            setValue={setValue}
            control={control}
            name='photo'
            errors={errors}
            clearErrors={clearErrors}
          />
        </Grid>
        <Grid item>
          <Button variant='outlined' color='secondary' type='submit' fullWidth>
            Add to Album
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default PhotoForm;
