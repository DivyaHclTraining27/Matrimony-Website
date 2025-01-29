import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export interface LoginValues{
    email: string,
    password: string
}
const loginSchema = Yup.object({

  email: Yup.string().required('email is required'),
  password: Yup.string().required('password is required'),
 
});
const initialValues={
    email: "", password: ""
}
function Login(){
    const dispatch=useDispatch()
    const navigate = useNavigate()
 const handleSubmit = (values: LoginValues, { setSubmitting }:any) => {
    setTimeout(() => {
    console.log(values);
    
      setSubmitting(false);
    }, 400);

    dispatch({type: 'LOGIN_REQUEST', payload: values,navigate})
  };

 
    return (
      <>
       
        <br />
        <br />
        <br />
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
           
            <Form className="max-w-sm mx-auto">
                 <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="mb-5">
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                 
              <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" />
              <ErrorMessage name="email" component='div'>
              { msg => <div style={{ color: 'red' }}>{msg}</div> }
              </ErrorMessage>
              </div>
              <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <Field type="password" placeholder='password' name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  <ErrorMessage name="password" component='div'>
                  { msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>
              </div>
            
              <button name="submit" type="submit"  disabled={isSubmitting} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
              </div>
              </div>
             </Form>
           
          )}
        </Formik>
      </>
    );
  }


export default Login;


