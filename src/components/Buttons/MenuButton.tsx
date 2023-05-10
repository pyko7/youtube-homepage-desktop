import { Bars3Icon } from "@heroicons/react/24/solid";

const MenuButton = () => {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      className="w-12 h-12 px-2 rounded-[50%] hover:bg-main-text/10"
    >
      <Bars3Icon className="w-full h-full" />
    </button>
  );
};

export default MenuButton;
