import { useEffect, useState } from 'react';
import {Product, fetchProductsByVideoId} from "../helper/products";

function useProductsByVideoId(videoId: string | undefined) {
    const [products, setProducts] = useState<{data: Product[]}>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const productData = await fetchProductsByVideoId(videoId);
                setProducts(productData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        if (videoId) {
            fetchData();
        }
    }, [videoId]);

    return products;
}

export default useProductsByVideoId;