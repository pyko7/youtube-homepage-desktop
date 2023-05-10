import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const VideoCardMenuButton = ({ ...props }) => {
  const handleClick = () => {
    return props.setMenu(true);
  };
  return (
    <button
      type="button"
      aria-label="Action menu"
      className={`${!props.visible ? "invisible" : "visible"} w-6 h-6`}
      onClick={handleClick}
    >
      <EllipsisVerticalIcon className="w-full h-full" />
    </button>
  );
};

export default VideoCardMenuButton;
