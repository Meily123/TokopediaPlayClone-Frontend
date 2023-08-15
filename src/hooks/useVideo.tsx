import { useEffect, useState } from "react";
import { fetchVideoById, Video } from "../helper/videos"; // Assuming you have a fetchVideo function

function useVideo(videoId: string | undefined) {
    const [video, setVideo] = useState<{data:Video}>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSingleVideo = async() => {
            try {
                const fetchedVideo = await fetchVideoById(videoId);
                setVideo(fetchedVideo);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        }

        fetchSingleVideo();
    }, [videoId]);

    return video;
}

export default useVideo;
