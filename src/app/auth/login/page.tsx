import type { FC } from 'react';
import SignInModule from '@/modules/auth';

interface SignInPageProps { }

const SignInPage: FC<SignInPageProps> = () => {
    return (
        <SignInModule />
    );
}

export default SignInPage;
