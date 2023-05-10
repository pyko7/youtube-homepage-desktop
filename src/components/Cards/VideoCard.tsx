import { Video } from "../../types/types";
import VideoCardChips from "../Chips/VideoCardChips";
import DropdownMenuButton from "../Buttons/DropdownMenuButton";
import DropdownMenu from "../Menus/DropdownMenu";
import { actionMenu } from "../../utils/menus";
import { useEffect, useRef, useState } from "react";
import thumbnail from "../../assets/images/pexels-luddmyla-14707145.jpg";
import avatar from "../../assets/images/pexels-josue-velasquez-16564746.jpg";

const VideoCard = ({ ...props }: Video) => {
  const [position, setPosition] = useState<DOMRect>();
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState(false);
  const [lastChild, setLastChild] = useState(false);
  const [visibleOnHover, setVisibleOnHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!menu || !visible) {
      setVisible(true);
      return setMenu(true);
    }
    setVisible(false);
    return setMenu(false);
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setPosition(ref.current.getBoundingClientRect());
  }, [ref.current]);

  useEffect(() => {
    if (!ref.current || !position) {
      return;
    }
    if (position.right > window.innerWidth) {
      setLastChild(true);
    }
  }, [position, ref.current]);

  return (
    <div className="w-[352px] flex flex-col gap-4 text-main-text">
      <a href="#" className="relative w-full aspect-video">
        <img
          src={thumbnail}
          alt="made by luddmyla"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1">
          <VideoCardChips />
        </div>
      </a>

      <div
        className="w-full flex gap-4"
        onMouseEnter={() => setVisibleOnHover(true)}
        onMouseLeave={() => setVisibleOnHover(false)}
      >
        <div className="w-16 h-16 z-10">
          <a href="#">
            <img
              src={avatar}
              alt="made by josue velasquez"
              className="w-full object-cover aspect-square rounded-[50%]"
            />
          </a>
        </div>
        <div className="flex flex-col gap-[2px]">
          <a
            href="#"
            className="overflow-hidden text-ellipsis font-bold line-clamp-2 leading-tight"
          >
            {props.title}
          </a>
          <a
            href="https://github.com/pyko7/"
            className="w-fit text-sm hover:brightness-150"
          >
            {props.author}
          </a>
          <div className="flex gap-1 text-sm">
            <span>{props.views} views</span>
            <span>•</span>
            <span>{props.createdAt} days ago</span>
          </div>
        </div>
        <div className="relative z-20" onClick={(e) => e.preventDefault()}>
          <div
            className={`${
              visibleOnHover || visible ? "visible" : "invisible"
            } w-6 h-6`}
          >
            <DropdownMenuButton handleClick={handleClick} />
            <div
              className={`absolute w-60 rounded-xl bg-neutral-950 z-20 ${
                lastChild ? "right-0" : ""
              } `}
            >
              <div ref={ref}>
                {menu ? <DropdownMenu menu={actionMenu} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
