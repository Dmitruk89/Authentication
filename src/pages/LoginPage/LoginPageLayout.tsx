import styles from './LoginPage.module.css';
import { Formik } from 'formik';
import { userData } from '../../interface/auth.interface';
import { Button } from '@material-ui/core';

interface IProps {
    isFetching: boolean,
    getUser: (args: userData) => void,
    user: {
      name: string,
      email: string,
      id: number
    } | null,
}

const LoginPageLayout: React.FunctionComponent <IProps> = props => {

    return (
        <Formik
       initialValues={{ email: 'user@ozitag.com', password: 'user' }}
       validate={values => {
         const errors: Partial<userData> = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={async (values) => props.getUser(values)}
     >
       {({
         values,
         errors,
         handleChange,
         handleSubmit,
         isSubmitting
       }) => (
         <form className={styles.myForm} onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             value={values.email}
           />
           {errors.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             value={values.password}
           />
           {errors.password && errors.password}
           <Button 
            type="submit" 
            disabled={isSubmitting} 
            color="primary" 
            variant="outlined"
            >
              Submit
            </Button>
         </form>
       )}
     </Formik>
    )
}

export default LoginPageLayout;