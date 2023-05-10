import { useState } from "react";
import SearchbarButton from "../Buttons/SearchbarButton";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Searchbar = () => {
  const [focus, setFocus] = useState(false);

  return (
    <form className="w-full max-w-xl h-10 flex items-center">
      <div
        className={`w-fit h-full pl-4 flex items-center justify-center rounded-l-3xl border-1 border-r-0 border-blue-600
        ${!focus ? "border-none" : ""}`}
      >
        <MagnifyingGlassIcon
          className={`${
            !focus ? "invisible" : "visible"
          } w-5 h-5 text-main-text`}
        />
      </div>

      <input
        type="text"
        minLength={1}
        placeholder="Search"
        className={`w-full h-full px-4 text-main-text rounded-l-3xl bg-transparent
         ${focus ? "border-l-0" : ""} border-main-outline border-1
        focus:outline-none focus:border-y-[1px] focus:rounded-none focus:border-blue-600`}
        style={{ boxShadow: "inset rgba(0, 0, 0, 0.5) 0px 1px 10px" }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <SearchbarButton />
    </form>
  );
};

export default Searchbar;
