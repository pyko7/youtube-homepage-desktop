import VideoCard from "./VideoCard";
import { videoDetails } from "../../utils/videos";

const VideoCardsList = () => {
  const videoList = Array(8).fill(videoDetails);
  return (
    <ul className="w-full flex gap-x-3 gap-y-14 flex-wrap">
      {videoList.map((video, idx) => {
        return (
          <li key={idx}>
            <VideoCard {...video} />
          </li>
        );
      })}
    </ul>
  );
};

export default VideoCardsList;
