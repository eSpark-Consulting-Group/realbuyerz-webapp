import React from 'react';

const VideoComponent = () => {
    const videoUrl =
        'https://cdnl.iconscout.com/lottie/premium/thumb/page-not-found-5941352-4940821.mp4';

    const handleVideoEnd = (event) => {
        // Restart the video when it ends
        event.target.play();
    };

    return (
        <video
            className="min-h-[150px] min-w-[150px] rounded-lg aspect-square"
            playsInline
            loop
            onEnded={handleVideoEnd}
        >
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
};

export default VideoComponent;
