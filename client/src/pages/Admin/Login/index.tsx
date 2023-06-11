import './Login.css';
import { useState } from 'react';
import { useAdminSystem } from "../../../providers/AdminSystem";

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
        <div className='Login'>
            <form onSubmit={handleSubmit}>
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
                    onClick={() => setPassworInputType(prev => prev === 'password' ? 'text' : 'password')}
                    >{passwordInputType === 'password' ? 'view' : 'hide'}</button>
                </label>
                <button type='submit'>ENTER</button>
            </form>
        </div>
    );
};

export default Login;
