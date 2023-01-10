import { Row, Switch, useTheme, Text } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "icons";
import { useTheme as useNextTheme } from "next-themes";

export const SwitchTheme = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Row gap={6} align="center" justify="flex-end" css={{
      position: 'absolute',
      top: 0,
      right: 0,
      pt: '$16',
    }}>
      
      <Switch
        checked={isDark}
        size="xl"
        iconOn={<SunIcon filled />}
        iconOff={<MoonIcon filled />}
        onChange={(v) => setTheme(v.target.checked ? "dark" : "light")}
      />
    </Row>
  );
};
