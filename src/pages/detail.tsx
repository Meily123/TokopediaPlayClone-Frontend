import React, {useEffect, useRef, useState} from 'react';
import VideoPlayer from '../components/videoPlayer';
import CommentSection from '../components/commentSection';
import ProductsSection from '../components/productSection';
import {useNavigate, useParams} from "react-router-dom";
import useVideo from "../hooks/useVideo";
import {Video} from "../helper/videos";
import useProductsByVideoId from "../hooks/useProducts";

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const videoRef = useRef<HTMLDivElement | null>(null); // Ref for the video section
    const productRef = useRef<HTMLDivElement | null>(null);
    const [isLoved, setIsLoved] = useState(false);

    const navigate = useNavigate();

    const navigateAllVideo = () => {
        navigate(`/`);
    }

    if (!id) {
        navigateAllVideo();
    }

    const video = useVideo(id);

    const products= useProductsByVideoId(id);

    const calculateTotalHeight = () => {
        if (videoRef.current && productRef.current) {
            const videoHeight = videoRef.current.clientHeight;
            const productHeight = productRef.current.clientHeight;
            const totalHeight = videoHeight + productHeight;

            const commentSection = document.querySelector('.comment-section') as HTMLElement;
            if (commentSection) {
                commentSection.style.height = `${totalHeight}px`;
            }
        }
    };

    useEffect(() => {


        calculateTotalHeight(); // Initial calculation
        window.addEventListener('resize', calculateTotalHeight); // Recalculate on window resize

        return () => {
            window.removeEventListener('resize', calculateTotalHeight); // Cleanup
        };
    }, []);

    useEffect(() => {
        if (video){
            setIsLoved(video.data.is_liked);
        }
    }, [video])

    if (!video) {
        return <div>Something Went Wrong</div>
    }

    const productsData = products?.data;

    const handleLoveClick = () => {
        setIsLoved(!isLoved);
    }

    calculateTotalHeight();

    // @ts-ignore
    return (
        <div>
            <div className="text-white m-1 p-2">
                <div className="truncate w-3/4">
                    <svg className="text-white inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="1"
                         stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={navigateAllVideo}>
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    {video.data.description}
                </div>
                {video.data.createdBy}
                <svg className={`h-8 w-8 text-white float-right ${isLoved? "fill-red-600 text-red-600":""}`} viewBox="0 0 24 24" stroke="currentColor" onClick={handleLoveClick}>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            </div>

            <div className="container m-auto h-[100vh] flex align-middle items-center justify-between">
                <div className="float-left w-[70%] relative">
                    <div className="absolute top-0 left-0 text-white z-30">
                        <span className="ml-1.5 my-1.5 px-1 inline-flex items-center px-0.5 font-bold bg-black rounded-sm opacity-60">
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>

                            <span className="ml-1 font-bold text-xs"> {video.data.views}</span>
                        </span>
                    </div>
                    <div className="" ref={videoRef}>
                        <VideoPlayer videoUrl={video.data.videoUrl} />
                    </div>
                    <div className="flex pt-5" ref={productRef}>
                        {products? <ProductsSection Products={products.data} />: ""}
                    </div>
                </div>
                <div className="comment-section float-right w-[30%] bg-white ml-1 p-1 rounded-md text-xxxs border border-gray-400">
                    {id? <CommentSection id={id}/>: ""}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
