import { useNavigate } from 'react-router-dom';

import Button from '../Button';

interface PreviousPageBTProps {
    className?: string;
};

const PreviousPageBT: React.FC<PreviousPageBTProps> = ({ className }) => {
    const navigate = useNavigate();

    return (
        <Button className={className} onClick={() => navigate(-1)}>Go back</Button>
    );
};

export default PreviousPageBT;


