'use client';
import { Lock, User } from '@/assets/icons';
import type { FC } from 'react';
import './style.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import useAuth from '@/services/auth';
import { useSnackbar } from 'notistack';

interface LoginFormProps { }

interface FormData {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const LoginForm: FC<LoginFormProps> = () => {
    const { login } = useAuth()
    const { enqueueSnackbar } = useSnackbar()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) });
    
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const user = {
            email: data.email,
            password: data.password,
        }
        await login(user).then((data) => {
            enqueueSnackbar({ message: "Logged In Successfully!", variant: "success" })
        })

    };

    return (
        <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
            <div className='inputGroup'>
                <label htmlFor="email" className='inputLabel'>Email</label>
                <div className='input'>
                    <span className='icon'><User /></span>
                    <input
                        type="text"
                        id='email'
                        className='inputControl'
                        {...register('email')}
                    />
                </div>
                {errors.email && <span className='error'>{errors.email.message}</span>}
            </div>
            <div className='inputGroup'>
                <label htmlFor="password" className='inputLabel'>Password</label>
                <div className='input'>
                    <span className='icon'><Lock /></span>
                    <input
                        type="password"
                        id='password'
                        className='inputControl'
                        {...register('password')}
                    />
                </div>
                {errors.password && <span className='error'>{errors.password.message}</span>}
            </div>
            <div className="checkboxWrapper">
                <input type="checkbox" id="checkbox" className="checkbox" />
                <label htmlFor="checkbox" className="checkboxLabel">Remember Me</label>
            </div>
            <button type="submit" className='loginBtn'>Log In</button>
        </form>
    );
};

export default LoginForm;
