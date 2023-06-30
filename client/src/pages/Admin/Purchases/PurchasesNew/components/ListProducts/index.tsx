import './ListProducts.css';

import RadioListInput from '../../../../../../components/RadioListInput';
import Item from "../Item";

import type { Product } from "../../../utils";

interface ListProductsProps {
    className?: string;

    products: Product[];
    selectedProduct: Product | null;

    selectProduct: (product: Product | null) => void;
};

const ListProducts: React.FC<ListProductsProps> = ({ 
    className = '',
    products,
    selectedProduct,
    selectProduct,
}) => {
    if (!products.length) return (<div className={`ListProducts ${className}`}>No products</div>);

    return (
        <div className={`ListProducts ${className}`}>
            <RadioListInput
            className='ListProducts__RadioListInput'
            htmlFor='product'
            allowToDeselect={true}
            list={products}
            selected={selectedProduct}
            select={(item) => {
                const product = item as Product | null;
                selectProduct(product);
            }}
            RenderAs={(item) => {
                const product = item as Product;
                return (
                    <Item product={product} isSelected={selectedProduct?.id === product.id} />
                );
            }}
            />
        </div>
    );
};

export default ListProducts;
