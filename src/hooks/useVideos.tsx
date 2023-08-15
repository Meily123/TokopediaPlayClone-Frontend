import {useEffect, useState} from "react";
import {fetchVideos} from "../helper/videos";
import {Video} from "../helper/videos";

function useVideos() {
    const [videos, setVideos] = useState<{data:Video[]}>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const videoData = await fetchVideos();
                setVideos(videoData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }

        fetchData();
    }, []);

    return { videos, loading };
}

export default useVideos;