import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { HandleScrollValue } from "../../../types/types";

const ScrollToRight = ({ ...scrollProps }: HandleScrollValue) => {
  return (
    <button
      type="button"
      aria-label="Next"
      className="w-9 h-9 px-2 rounded-[50%] hover:bg-main-text/10"
      onClick={() => scrollProps.handleClick(200)}
    >
      <ChevronRightIcon className="w-full h-full text-main-text" />
    </button>
  );
};

export default ScrollToRight;
