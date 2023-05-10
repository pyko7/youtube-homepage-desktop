import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { HandleScrollValue } from "../../../types/types";

const ScrollToLeft = ({ ...scrollProps }: HandleScrollValue) => {
  return (
    <button
      type="button"
      aria-label="Previous"
      className="w-9 h-9 px-2 rounded-[50%] hover:bg-main-text/10"
      onClick={() => scrollProps.handleClick(-200)}
    >
      <ChevronLeftIcon className="w-full h-full text-main-text" />
    </button>
  );
};

export default ScrollToLeft;
