import { videoDetails } from "../../utils/videos";
import ShortsCard from "./ShortsCard";

const ShortsCardsList = () => {
  const videoList = Array(8).fill(videoDetails);

  return (
    <ul className="w-full flex gap-x-4 gap-y-14 flex-wrap">
      {videoList.map((video, idx) => {
        return (
          <li key={idx}>
            <ShortsCard {...video} />
          </li>
        );
      })}
    </ul>
  );
};

export default ShortsCardsList;
