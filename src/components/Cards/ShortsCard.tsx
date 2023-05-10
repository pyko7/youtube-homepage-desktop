import { useEffect, useRef, useState } from "react";
import { Video } from "../../types/types";
import DropdownMenuButton from "../Buttons/DropdownMenuButton";
import DropdownMenu from "../Menus/DropdownMenu";
import { actionMenuShorts } from "../../utils/menus";
import thumbnail from "../../assets/images/pexels-anna-shvets-4588052.jpg";

const ShortsCard = ({ ...props }: Video) => {
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
    <a
      href="#"
      className="w-52 flex flex-col gap-4 text-main-text"
      onMouseEnter={() => setVisibleOnHover(true)}
      onMouseLeave={() => setVisibleOnHover(false)}
    >
      <img
        src={thumbnail}
        alt="made by anna shvets"
        className="w-full object-cover rounded-xl"
      />

      <div className="w-full flex gap-4">
        <div className="flex flex-col gap-[2px]">
          <div className="overflow-hidden text-ellipsis font-bold line-clamp-2 leading-tight">
            {props.title}
          </div>
          <div className="text-sm">
            <span>{props.views} views</span>
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
                {menu ? <DropdownMenu menu={actionMenuShorts} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ShortsCard;
