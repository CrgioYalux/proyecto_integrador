import './ListProviders.css';

import type { Provider } from '../../utils';

interface ListProvidersProps {
    className?: string;

    providers: Provider[];

    selectedProvider: Provider | null;
    selectProvider: (provider: Provider) => void;

    children?: React.ReactNode;
};

const ListProviders: React.FC<ListProvidersProps> = ({
    className = '',
    providers,
    selectedProvider,
    selectProvider,
    children,
}) => {
    const handleOnChange = (e: React.SyntheticEvent) => {
        const selectElement = e.target as HTMLSelectElement;
        const providerId = Number(selectElement.value);
        const provider = providers.find((p) => p.id === providerId);

        if (provider) selectProvider(provider);
    };

    return (
        <div className={`ListProviders ${className}`}>
            <select onChange={handleOnChange}>
                {providers.map((provider) => {
                    return (
                        <option value={provider.id} key={`item-${provider.id}`} defaultChecked={selectedProvider?.id === provider.id}>
                            {provider.name}
                        </option>
                    );
                })}
            </select>
            {children}
        </div>
   );
};

export default ListProviders;
