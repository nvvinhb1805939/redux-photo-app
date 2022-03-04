import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, Grid } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import RandomPhotoField from 'components/form-controls/RandomPhotoField';
import SelectField from 'components/form-controls/SelectField';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
  isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
  onSubmit: null,
  defaultValues: {},
  isAddMode: true,
};

function PhotoForm({ onSubmit, defaultValues, isAddMode }) {
  const location = useLocation();
  const schema = yup
    .object()
    .shape({
      title: yup.string().trim().required('This field is required!').min(4, 'This contains at least 4 characters!'),
      category: yup.object().nullable().required('This field is required!'),
      photo: yup.string().trim().required('This field is required!'),
    })
    .required();

  const {
    formState: { isSubmitSuccessful, isSubmitting, errors },
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = values => {
    const successMessage = isAddMode ? 'Add photo success!' : 'Update photo success!';
    return new Promise(resolve => {
      setTimeout(() => {
        onSubmit(values);
        reset();
        resolve(successMessage);
      }, 2000);
    }).then(resolve => {
      alert(resolve);
    });
  };

  useEffect(() => {
    reset(defaultValues);
  }, [location]);

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
          <Button variant='outlined' color='secondary' type='submit' fullWidth>
            {isSubmitting && <CircularProgress color='secondary' size={20} thickness={3} />}
            {isAddMode ? 'Add to Album' : 'Update Photo'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default PhotoForm;
