import type { FC } from 'react';
import { ChatLogo } from '@/assets/icons';
import LoginForm from '@/modules/auth/components/loginForm';
import Link from 'next/link';

interface SignInModuleProps { }

const SignInModule: FC<SignInModuleProps> = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen bg-slate-100 gap-2'>
            <div className="flex justify-center items-center">
                <ChatLogo className='w-10 h-10 text-violet-600' />
                <h2 className='text-2xl font-semibold ps-3 '>Login</h2>
            </div>
            <p className='p-3 text-slate-500'>login to move to chat app</p>
            <LoginForm />
            <p className='p-3'>Don't have an account ? <Link href={'/auth/register'} className='text-violet-400'>Register now</Link></p>
        </div>
    );
}

export default SignInModule;
