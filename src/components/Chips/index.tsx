import { useEffect, useState } from "react";

const Chips = ({ label }: { label: string }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (label !== "All") {
      return;
    }
    setActive(true);
  }, [label]);

  return (
    <a
      href="#"
      className={`block w-fit px-3 py-1 whitespace-nowrap rounded-md
      ${
        active
          ? "bg-main-text text-main-bg hover:bg-main-text"
          : "text-main-text bg-button-bg  hover:bg-button-bg-hover"
      }
      `}
      style={{ transition: "background-color 250ms linear" }}
    >
      {label}
    </a>
  );
};

export default Chips;
