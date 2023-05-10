import { useState } from "react";
import DropdownMenuButton from "./Buttons/DropdownMenuButton";
import LoginButton from "./Buttons/LoginButton";
import MenuButton from "./Buttons/MenuButton";
import Searchbar from "./Forms/Searchbar";
import DropdownMenu from "./Menus/DropdownMenu";
import { headerMenu } from "../utils/menus";
import logo from "../assets/images/logo-ytb.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    return menu ? setMenu(false) : setMenu(true);
  };
  return (
    <header className="w-full h-20 px-6 flex items-center justify-between bg-main-bg">
      <div className="max-w-xs flex basis-1/3 items-center text-main-text">
        <MenuButton />
        <a href="/" title="youtube homepage" className="w-fit h-fit mt-[2px]">
          <img src={logo} alt="" className="w-32 aspect-video object-contain" />
        </a>
      </div>
      <div className="w-full flex justify-center">
        <Searchbar />
      </div>
      <div className="flex basis-1/3 justify-end items-center gap-4 text-main-text">
        <div className="relative">
          <div className={"w-7 h-7"}>
            <DropdownMenuButton handleClick={handleClick} />
            <div className="absolute right-0 w-60 rounded-xl bg-neutral-950 z-20">
              {menu ? <DropdownMenu menu={headerMenu} /> : null}
            </div>
          </div>
        </div>

        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
