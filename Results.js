import React from "react";
import Video from "./Video";

const Results = ({videos,loading}) => {
    return (
        <div className="search-result">
            {loading ? ( <div className="loader"> </div> ) :
            videos.map((video) => {
                return (
                    <Video
                    key={video.id.videoId}
                    title ={video.snippet.title}
                    dateAdded={video.snippet.publishedAt}
                    channel={video.snippet.channelTitle}
                    thumbnails={video.snippet.thumbnails.medium}
                    description={video.snippet.description}
                    id={video.id.videoId}
                    />
                )

            })}
        </div>
    )
}
export default Results;