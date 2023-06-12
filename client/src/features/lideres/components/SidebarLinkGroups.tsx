import { useState } from "react";

interface SidebarLinkGroupsProps {
  children: (handleClick: () => void, open: boolean) => React.ReactNode;
  activeCondition: boolean;
}

const SidebarLinkGroups = ({
  children,
  activeCondition,
}: SidebarLinkGroupsProps) => {
  const [open, setOpen] = useState(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activeCondition && "bg-slate-900"
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
};

export default SidebarLinkGroups;
