import React from 'react';
import YouTube from 'react-youtube';

type VideoPlayerProps = {
    videoUrl: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
    const extractVideoIdFromUrl = () => {
        const match = videoUrl.match(/v=([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : '';
    };

    const videoId = extractVideoIdFromUrl();

    return (
        <div className="video-player" style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: 0, paddingBottom: '56.25%', position: 'relative' }}>
            <YouTube
                videoId={videoId}
                opts={{
                    playerVars: {
                        controls: 1, // Show video controls
                        modestbranding: 1, // Hide YouTube logo
                        playing: true,
                        autoplay: true,
                    },
                }}
                iframeClassName="absolute top-0 left-0 w-full h-full"
                className="object-cover w-full h-full"
            />
        </div>
    );
};

export default VideoPlayer;
