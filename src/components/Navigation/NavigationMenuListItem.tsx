import { useEffect, useState } from "react";
import { NavMenuListItem } from "../../types/types";

const NavigationMenuListItem = ({ Icon, label }: NavMenuListItem) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (label !== "Home") {
      return;
    }
    setActive(true);
  }, [label]);
  return (
    <a
      href="/"
      className={`w-full p-3 py-2 flex items-center gap-6 rounded-md text-sm
      ${active ? "bg-button-bg hover:bg-button-bg-hover" : ""}
      hover:bg-button-bg`}
    >
      <Icon
        className={`w-6 h-6 ${label.includes("Youtube") ? "text-red-600" : ""}`}
        aria-hidden="true"
      />
      {label}
    </a>
  );
};

export default NavigationMenuListItem;
