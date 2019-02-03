import React from 'react';
import { useInput } from '../../hooks/useInput';

const SignupPage = () => {

    const email = useInput();
    const password = useInput();

    return (
        <>
        <h1>Signup Page</h1>
        <form>
            <input type="email" {...email}/>
            <input type="password" {...password}/>
        </form>
        </>
    )
}

export default SignupPage;