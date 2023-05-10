import { HandleScrollValue } from "../../../types/types";
import ScrollToLeft from "./ScrollToLeft";
import ScrollToRight from "./ScrollToRight";

const ScrollXButton = ({ ...scrollProps }: HandleScrollValue) => {
  return (
    <>
      {scrollProps.scrollX !== 0 ? (
        <div
          className="absolute  left-0
    top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-r from-main-bg from-30% to-transparent"
        >
          <ScrollToLeft {...scrollProps} />
        </div>
      ) : null}
      {scrollProps.scrollEnd ? null : (
        <div
          className="absolute right-0
          top-1/2 -translate-y-1/2 w-20 h-full flex flex-row-reverse bg-gradient-to-l from-main-bg from-30% to-transparent"
        >
          <ScrollToRight {...scrollProps} />
        </div>
      )}
    </>
  );
};

export default ScrollXButton;
