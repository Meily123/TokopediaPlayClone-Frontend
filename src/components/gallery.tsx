import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import HomeHeader from "./homeHeader";
import Videos from "./videos";

// Define a type for the image object
type Image = {
    _id: string;
    thumbnailUrl: string;
    category: string;
    views: number;
    description: string;
    createdBy: string;
    videoUrl: string;
    products: string[];
    likes: number;
};

type GalleryProps = {
    images: Image[];
    category: string | null;
    onCategoryChange: (category: string | null) => void;
};

const Gallery: React.FC<GalleryProps> = ({ images, category, onCategoryChange }) => {

    const filteredImages = category
        ? images.filter((image) => image.category === category)
        : images;

    return (
        <div className="">
            <HomeHeader category={category} onCategoryChange={onCategoryChange} />
            <br/>
            <br/>
            <br/>
            <br/>
            <Videos images={filteredImages}/>
        </div>
    );
};
export default Gallery;
