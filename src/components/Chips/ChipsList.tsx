import Chips from ".";
import { useScrollX } from "../../hooks/useScrollX";
import { chipsMenu } from "../../utils/menus";
import ScrollXButton from "../Buttons/ScrollXButton";

const ChipsList = () => {
  const { ref, scrollX, scrollEnd, handleClick, handleScroll } = useScrollX();
  const scrollProps = {
    scrollX,
    scrollEnd,
    handleClick,
  };
  return (
    <div className="relative">
      <div
        ref={ref}
        className={"w-full overflow-x-scroll scroll-smooth"}
        style={{ scrollbarWidth: "none" }}
        onScroll={handleScroll}
      >
        <ul className={"w-full flex items-center gap-3 "}>
          {chipsMenu.map((item, idx) => (
            <li key={idx}>
              <Chips label={item} />
            </li>
          ))}
        </ul>
        <ScrollXButton {...scrollProps} />
      </div>
    </div>
  );
};

export default ChipsList;
