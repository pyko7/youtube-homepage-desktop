import NavigationMenuList from "./NavigationMenuList";
import NavigationMenuListItem from "./NavigationMenuListItem";
import {
  firstMenu,
  secondMenu,
  explorerMenu,
  channelsMenu,
  youtubeContent,
  settingsMenu,
} from "../../utils/menus";
import Divider from "../Divider";
import { DividerSizes } from "../../types/types";

const NavigationMenu = () => {
  return (
    <nav className="navbar w-1/3 max-w-[240px] max-h-screen px-4 text-main-text overflow-y-scroll">
      <NavigationMenuList>
        {firstMenu.map((item) => {
          return (
            <NavigationMenuListItem
              Icon={item.Icon}
              label={item.label}
              key={item.label}
            />
          );
        })}
      </NavigationMenuList>

      <div className="w-72 -ml-8">
        <Divider size={DividerSizes.thin} />
      </div>

      <NavigationMenuList>
        {secondMenu.map((item) => {
          return (
            <NavigationMenuListItem
              Icon={item.Icon}
              label={item.label}
              key={item.label}
            />
          );
        })}
      </NavigationMenuList>

      <div className="w-72 -ml-8">
        <Divider size={DividerSizes.thin} />
      </div>

      <>
        <span className="text-lg">Explorer</span>
        <NavigationMenuList>
          {explorerMenu.map((item) => {
            return (
              <NavigationMenuListItem
                Icon={item.Icon}
                label={item.label}
                key={item.label}
              />
            );
          })}
        </NavigationMenuList>
      </>

      <div className="w-72 -ml-8">
        <Divider size={DividerSizes.thin} />
      </div>

      <NavigationMenuList>
        {channelsMenu.map((item) => {
          return (
            <NavigationMenuListItem
              Icon={item.Icon}
              label={item.label}
              key={item.label}
            />
          );
        })}
      </NavigationMenuList>

      <div className="w-72 -ml-8">
        <Divider size={DividerSizes.thin} />
      </div>

      <NavigationMenuList>
        {youtubeContent.map((item) => {
          return (
            <NavigationMenuListItem
              Icon={item.Icon}
              label={item.label}
              key={item.label}
            />
          );
        })}
      </NavigationMenuList>

      <div className="w-72 -ml-8">
        <Divider size={DividerSizes.thin} />
      </div>

      <NavigationMenuList>
        {settingsMenu.map((item) => {
          return (
            <NavigationMenuListItem
              Icon={item.Icon}
              label={item.label}
              key={item.label}
            />
          );
        })}
      </NavigationMenuList>
    </nav>
  );
};

export default NavigationMenu;
