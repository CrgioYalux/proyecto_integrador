import './Login.css';

import { useState, useRef, createRef } from 'react';
import { useAdminSystem } from "../../../providers/AdminSystem";

import OpenEye from '../../../components/Icons/OpenEye';
import ClosedEye from '../../../components/Icons/ClosedEye';
import Button from '../../../components/Button';

interface LoginProps { };

const Login: React.FC<LoginProps> = ({ }) => {
    const [_, actions] = useAdminSystem();
    const [passwordInputType, setPassworInputType] = useState<'password'|'text'>('password');
    const formTipSpanRef = useRef<HTMLSpanElement | null>(null);
    const submitButtonRef = createRef<HTMLButtonElement>();

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

        form.classList.remove('--login-failed');
        if (formTipSpanRef.current) {
            formTipSpanRef.current.textContent = '';
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
            <label className='Login__label' htmlFor='username'>
                <strong className='Login-label__text'>Username</strong>
                <div className='Login-label__input'>
                    <input 
                    type='text'
                    id='username'
                    name='username'
                    required
                    autoFocus
                    />
                </div>
            </label>
            <label className='Login__label' htmlFor='password'>
                <strong className='Login-label__text'>Password</strong>
                <div className='Login-label__input'>
                    <input 
                    type={passwordInputType}
                    id='password'
                    name='password'
                    required
                    />
                    <button
                    type='button'
                    onClick={() => setPassworInputType(prev => prev === 'password' ? 'text' : 'password' )}
                    >{
                        passwordInputType === 'password' 
                        ? <OpenEye className='Login-label-input__icon' />
                        : <ClosedEye className='Login-label-input__icon' />
                    }</button>
                </div>
            </label>
            <span className='Login__state' ref={formTipSpanRef}></span>
            <Button className='Login__submit-bt' type='submit' ref={submitButtonRef}>ENTER</Button>
        </form>
    );
};

export default Login;
