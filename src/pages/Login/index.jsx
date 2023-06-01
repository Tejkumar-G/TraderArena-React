import { Button, Link, TextField, Typography } from '@mui/material';
import { ErrorMessage, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorElement from '../../components/ErrorElement';
import { LoginSchema } from '../../shared/constants';
import { login } from '../../api/user';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = () => {
    navigate('/', { replace: true, state: { forceRefresh: true } });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(login(values, onSuccess));
    setSubmitting(false);
  };

  return (
    <div className=' h-screen grid place-content-center gap-2'>
      <h1 className='text-center font-semibold text-xl'>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, handleBlur, values }) => (
          <Form className='flex flex-col mt-3 fi'>
            <TextField
              required
              label='Email'
              variant='outlined'
              name='email'
              size='small'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessage name='email' render={ErrorElement} />
            <TextField
              style={{ marginTop: '4%' }}
              required
              label='Password'
              variant='outlined'
              name='password'
              size='small'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <ErrorMessage name='password' render={ErrorElement} />
            <Button
              style={{ marginTop: '4%' }}
              variant='contained'
              type='submit'
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Typography>
        Don&apos;t have an account{' '}
        <Link className='cursor-pointer' onClick={() => navigate('/signup')}>
          Sign Up
        </Link>
      </Typography>
    </div>
  );
};

export default Login;
