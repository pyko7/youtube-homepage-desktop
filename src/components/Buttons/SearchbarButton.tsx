import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchbarButton = () => {
  return (
    <button
      type="submit"
      aria-label="Search for content"
      className="w-14 h-full px-4 flex items-center justify-center bg-button-bg rounded-r-3xl text-main-text"
    >
      <MagnifyingGlassIcon className="w-5 h-5" />
    </button>
  );
};

export default SearchbarButton;
