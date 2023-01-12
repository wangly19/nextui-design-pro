import { useTheme } from "@nextui-org/react";
import { MoonIcon } from "icons/moon";
import { SunIcon } from "icons/sun";
import { Icon } from "./icon";
import { useTheme as useNextTheme } from "next-themes";

export const LightMode = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const IconComponent = isDark ? SunIcon : MoonIcon;

  return (
    <div onClick={() => setTheme(type === "dark" ? "light" : "dark")}>
      <Icon as={IconComponent} filled />
    </div>
  );
};
