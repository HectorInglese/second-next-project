"use client"

import { MoonIcon } from "@/public/MoonIcon";
import { SunIcon } from "@/public/SunIcon";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Switch
        defaultSelected
        size="lg"
        color="default"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onValueChange={() => { setTheme(theme === "light" ? "dark" : "light") }}
        className="cursor-pointer m-5 "
      >
      </Switch>
    </>
  );
};