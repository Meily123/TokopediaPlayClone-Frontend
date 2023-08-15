import React from 'react';
import HomeHeader from "./homeHeader";
import Videos from "./videos";
import {Video} from "../helper/videos";

type GalleryProps = {
    videos: Video[];
    category: string | null;
    onCategoryChange: (category: string | null) => void;
};

const Gallery: React.FC<GalleryProps> = ({ videos, category, onCategoryChange }) => {

    const filteredImages = category
        ? videos.filter((video) => video.category === category)
        : videos;

    return (
        <div className="">
            <HomeHeader category={category} onCategoryChange={onCategoryChange} />
            <br/>
            <br/>
            <br/>
            <br/>
            <Videos videos={filteredImages}/>
        </div>
    );
};
export default Gallery;
