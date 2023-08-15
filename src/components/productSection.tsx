import React from 'react';
import {Product} from "../helper/products";

interface ProductsSectionProps {
    Products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ Products }) => {

    const products = Products;

    const CurrencyFormatter = ({ value }: { value: number }) => {
        const formattedValue = value.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });

        return `Rp. ${formattedValue}`;
    }

    return (
        <div className="container">
            <div className="flex overflow-x-auto pb-6 no-scrollbar ">
                <div className="flex">
                    {products.map((product) => (
                        <div key={product._id} className="w-20 h-35 mr-3 rounded-md" onClick={() => {
                                                                                                            window.open(product.productUrl)
                                                                                                        }}>
                            <figure className="h-3/4 bg-white rounded-t-md overflow-hidden">
                                <div className="rounded-md overflow-hidden w-full h-full">
                                    <img className="object-cover h-full w-full" src={product.imageUrl} alt="Product" />
                                </div>
                            </figure>
                            <div className="h-1/3 p-2 bg-white overflow-hidden rounded-b-md">
                                <p className="text-black text-xxxs">{CurrencyFormatter({ value: product.price })}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;
