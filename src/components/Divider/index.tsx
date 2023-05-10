import { DividerSizes } from "../../types/types";

const Divider = ({ size }: { size: DividerSizes }) => {
  return (
    <hr
      className={`w-full my-5 border-main-outline ${
        size === DividerSizes.thin
          ? "border-1"
          : size === DividerSizes.large
          ? "border-4"
          : "border-2"
      }`}
    />
  );
};

export default Divider;
