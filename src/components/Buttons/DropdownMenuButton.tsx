import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const DropdownMenuButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      type="button"
      aria-label="Settings"
      className="w-full h-full"
      onClick={handleClick}
    >
      <EllipsisVerticalIcon className="w-full h-full" />
    </button>
  );
};

export default DropdownMenuButton;
