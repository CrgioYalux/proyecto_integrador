import './Button.css';

interface ButtonProps{
  className?: string; 
  children?: React.ReactNode;

  onClick?: (event: React.MouseEvent) => void;
};

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={`Button ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  )
};

export default Button;
