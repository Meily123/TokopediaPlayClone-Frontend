import {serverUrl} from "../shared/constants";

export interface Product {
    _id: string,
    productUrl: string,
    title: string,
    price: number,
    discount: number,
    createdBy: string,
    imageUrl: string,
}

export async function fetchProductsByVideoId (id:string|undefined) {
    const response = await fetch(`https://${serverUrl}/videos/${id}/product`);
    if (!response.ok) {
        throw new Error('Failed to fetch video products');
    }
    return await response.json ();
}
