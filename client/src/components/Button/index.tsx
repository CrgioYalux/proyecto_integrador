import './Button.css';

import { forwardRef } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  children,
  ...buttonProps
}, ref) => (
    <button ref={ref} {...buttonProps} className={`Button ${className ?? ''}`}>
      {children}
    </button>
));

export default Button;
