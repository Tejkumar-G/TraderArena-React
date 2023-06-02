import { Button, Link, TextField, Typography } from '@mui/material';
import { ErrorMessage, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorElement from '../../components/ErrorElement';
import { SignupSchema } from '../../shared/constants';
import { signUp } from '../../api/user';
import './style.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = () => {
    navigate('/', { replace: true });
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    if (values.phone.length === 0) delete values.phone;
    setSubmitting(true);
    dispatch(signUp(values, onSuccess));
    setSubmitting(false);
  };
  return (
    <div className='signup-container'>
      <h1 className='title'>Register</h1>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, handleBlur, values }) => (
          <Form className='form'>
            <TextField
              required
              label='First Name'
              variant='outlined'
              name='first_name'
              size='small'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <ErrorMessage name='first_name' render={ErrorElement} />
            <TextField
              required
              label='Last Name'
              variant='outlined'
              name='last_name'
              size='small'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <ErrorMessage name='last_name' render={ErrorElement} />
            <TextField
              label='Phone Number'
              variant='outlined'
              name='phone'
              type='number'
              size='small'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <ErrorMessage size='small' name='phone' render={ErrorElement} />
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
            <Button variant='contained' type='submit' disabled={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Typography>
        Already have an account?{' '}
        <Link className='link' onClick={() => navigate('/')}>
          Login here
        </Link>
      </Typography>
    </div>
  );
};

export default SignUp;
