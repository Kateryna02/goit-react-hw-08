import { Field, Form, Formik } from "formik";

import { Link } from "react-router-dom";
export default function AuthForm({ title, onSubmit, initialValues, type }) {
    return (
        <div>
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
                <Form className="form">
                    {type === 'register' && <Field className='field'
                        type='text'
                        name='name'
                        placeholder='Enter your name' />}
                    <Field
                        className='field'
                        type='text'
                        name='email'
                        placeholder='Enter your email'
                        autoComplete='username'
                    />
                    <Field
                        className='field'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        autoComplete="current-password" />
                    <button type="submit" className="button">{title}</button>
                        <p>
                            You {type === 'register' ? "already have an account?" : "don't have an account?"}
                            <Link to={type === 'register' ? '/login' : '/registor'}>
                                {type === 'register' ? 'Login' : 'Registor'}
                            </Link>
                        </p>
                </Form>
            </Formik>
        </div>
    )
}
