import './Login.css';
import { useState } from 'react';
import { useAdminSystem } from "../../../providers/AdminSystem";
import OpenEye from '../../../components/Icons/OpenEye';
import ClosedEye from '../../../components/Icons/ClosedEye';

interface LoginProps {
};

const Login: React.FC<LoginProps> = ({ }) => {
    const [_, actions] = useAdminSystem();
    const [passwordInputType, setPassworInputType] = useState<'password'|'text'>('password');

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
        event.preventDefault();
        actions.userSession.logIn();
    };

    return (
        <form className='Login' onSubmit={handleSubmit}>
            <strong>Login</strong>
            <label htmlFor='username'>
                <input 
                type='text'
                placeholder='username'
                id='username'
                name='username'
                required
                autoFocus
                />
            </label>
            <label htmlFor='password'>
                <input 
                type={passwordInputType}
                placeholder='password'
                id='password'
                name='password'
                required
                />
                <button
                type='button'
                onClick={() => setPassworInputType(prev => prev === 'password' ? 'text' : 'password' )}
                >{passwordInputType === 'password' ? <OpenEye /> : <ClosedEye />}</button>
            </label>
            <button type='submit'>ENTER</button>
        </form>
    );
};

export default Login;
