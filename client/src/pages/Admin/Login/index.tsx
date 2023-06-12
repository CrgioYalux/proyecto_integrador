import './Login.css';
import { useState, useRef } from 'react';
import { useAdminSystem } from "../../../providers/AdminSystem";
import OpenEye from '../../../components/Icons/OpenEye';
import ClosedEye from '../../../components/Icons/ClosedEye';

interface LoginProps { };

const Login: React.FC<LoginProps> = ({ }) => {
    const [_, actions] = useAdminSystem();
    const [passwordInputType, setPassworInputType] = useState<'password'|'text'>('password');
    const formTipSpanRef = useRef<HTMLSpanElement | null>(null);
    const submitButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        const form = event.target as HTMLFormElement & {
            username: HTMLInputElement,
            password: HTMLInputElement,
            tip: HTMLSpanElement,
        };

        if (submitButtonRef.current) {
            submitButtonRef.current.textContent = '...';
        }

        actions.userSession.logIn({ username: form.username.value, password: form.password. value })
            .then(() => {
                form.classList.remove('--login-failed');
            })
            .catch((reason: string) => {
                form.classList.add('--login-failed');
                if (formTipSpanRef.current) {
                    formTipSpanRef.current.textContent = reason;
                }
            })
            .finally(() => {
                if (submitButtonRef.current) {
                    submitButtonRef.current.textContent = 'ENTER'
                }
            });
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
            <span ref={formTipSpanRef}></span>
            <button type='submit' ref={submitButtonRef}>ENTER</button>
        </form>
    );
};

export default Login;
