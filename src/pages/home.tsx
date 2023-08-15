import React, { useState } from 'react';
import Gallery from '../components/gallery';
import useVideos from "../hooks/useVideos";

const Home: React.FC = () => {
    // Sample image data with different categories
    const { videos, loading } = useVideos();

    const [category, setCategory] = useState<string | null>(null);

    const handleCategoryChange = (newCategory: string | null) => {
        setCategory(newCategory);
    };

    return (
        <div className="Home">
            <Gallery images={videos? videos.data: []} category={category} onCategoryChange={handleCategoryChange} />
        </div>
    );
};

export default Home;
