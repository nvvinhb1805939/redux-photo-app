import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Grid } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import RandomPhotoField from 'components/form-controls/RandomPhotoField';
import SelectField from 'components/form-controls/SelectField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm({ onSubmit }) {
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
        is: item => item?.value == 2 || false,
        then: yup.string().notRequired(),
        otherwise: yup.string().required('This field is required!'),
      }),
    })
    .required();

  const {
    formState: { isSubmitting, errors },
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

  const handleOnSubmit = values => {
    onSubmit(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
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
          <LoadingButton loading variant='outlined'>
            Submit
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default PhotoForm;

{
  /* <Button variant='outlined' color='secondary' type='submit' fullWidth>
            Add to Album
          </Button> */
}
