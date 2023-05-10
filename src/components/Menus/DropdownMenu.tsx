import { NavMenuListItem } from "../../types/types";
import NavigationMenuList from "../Navigation/NavigationMenuList";
import NavigationMenuListItem from "../Navigation/NavigationMenuListItem";

const DropdownMenu = ({ menu }: { menu: NavMenuListItem[] }) => {
  return (
    <div
      className="w-full py-2  rounded-xl text-sm bg-button-bg"
      onClick={(e) => e.stopPropagation()}
    >
      <NavigationMenuList>
        {menu.map((item, idx) => (
          <li key={idx}>
            <NavigationMenuListItem {...item} />
          </li>
        ))}
      </NavigationMenuList>
    </div>
  );
};

export default DropdownMenu;
