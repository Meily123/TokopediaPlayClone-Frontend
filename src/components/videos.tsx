import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Video} from "../helper/videos";

type FilteredImagesProps = {
    videos: Video[];
};

const Videos: React.FC<FilteredImagesProps> = ({ videos}) => {
    const navigate = useNavigate();

    const navigateVideoDetail = (id: string) => {
        navigate(`/detail/${id}`);
    };

    const [expandedImageId, setExpandedImageId] = useState<string | null>(null);

    const handleImageClick = (imageId: string) => {
        if (expandedImageId === imageId) {
            setExpandedImageId(null);
        } else {
            setExpandedImageId(imageId);
        }
    };

    return (
        <div className="flex flex-wrap items-center m-2">
            {videos.map((video) => (
                <div className="w-1/2 sm:w-1/3 md:w-1/6 2xl:w-1/8 p-1.5" key={video._id} onClick={()=>{navigateVideoDetail(video._id)}}>
                    <div
                        className="rounded-md w-full h-0 pb-[179%] bg-cover bg-center relative overflow-hidden"
                        style={{
                            backgroundImage: `linear-gradient(0deg, rgba(63,63,63,0.9)0%, rgba(234,241,245,0) 50%, rgba(255,255,255,0) 100%), url('${video.thumbnailUrl}')`
                        }}
                    >
                        <div className="absolute top-0 left-0 text-white">
                                <span className="ml-1.5 my-1.5 px-1 inline-flex items-center px-0.5 font-bold bg-black rounded-sm opacity-60">
                                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>

                                    <span className="ml-1 font-bold text-xs"> {video.views}</span>
                                </span>
                        </div>
                        <div className={`absolute bottom-0 left-0 right-0 px-1.5 py-1.5  h-1/4 transition-all duration-300 ${expandedImageId === video._id ? 'overflow-scroll' : 'h-auto'}`} onClick={() => handleImageClick(video._id)}>
                            <div className="px-0.5 text-white text-xxxs float-left rounded-sm bg-discount-green" >
                                    <span className="inline-flex items-center px-0.5 font-bold">
                                       <svg
                                           className="h-3 w-3 text-white mt-0.5"
                                           width="24"
                                           height="24"
                                           viewBox="0 1 24 24"
                                           stroke-width="2"
                                           stroke="currentColor"
                                           fill="none"
                                           stroke-linecap="round"
                                           stroke-linejoin="round">
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                />
                                                <line
                                                    x1="9"
                                                    y1="15"
                                                    x2="15"
                                                    y2="9"
                                                />
                                                <circle
                                                    cx="9.5"
                                                    cy="9.5"
                                                    r=".5"
                                                    fill="currentColor"
                                                />
                                                <circle
                                                    cx="14.5"
                                                    cy="14.5"
                                                    r=".5"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1"
                                                />
                                       </svg>
                                        <span className="ml-1 font-bold"> {video.category}</span>
                                    </span>
                            </div>
                            <br/>
                            <p className={`text-left mb-0.5 text-xxs text-white ${expandedImageId === video._id ? '' : 'truncate'}`}>
                                {video.description}
                            </p>
                            <p className="text-left mb-1 text-xxs text-gray-300">
                                {video.createdBy}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Videos;
