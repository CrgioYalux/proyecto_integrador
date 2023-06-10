import './Loader.css';

interface LoaderProps {
    className?: string;
    size?: number;
}

const Blank: React.FC<{}> = () => <>&nbsp;&nbsp;</>;

const Loader: React.FC<LoaderProps> = ({ className, size = 2 }) => {
    const style = { '--Loader-size': size } as React.CSSProperties;

    return (
        <div className={`Loader ${className}`} style={style}>
        <p><Blank /></p>
        </div>
    );
};

export default Loader;
