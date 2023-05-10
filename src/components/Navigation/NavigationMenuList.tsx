import { Children } from "../../types/types";

const NavigationMenuList = ({ children }: Children) => {
  return <ul className="w-full flex flex-col">{children}</ul>;
};

export default NavigationMenuList;
