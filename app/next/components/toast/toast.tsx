import * as React from "react";
import { Card, styled, Text, useTheme, BadgeProps } from "@nextui-org/react";
import { Flex } from "components/flex";
import { Send } from "react-iconly";
import { useSpring, animated } from "@react-spring/web";

export interface ToastProps {
  title: string;
  description?: string;
  type?: 'primary' | 'error' | 'warning';
  /** @default 2000 */
  duration?: number;
  icon?: React.ReactNode;
}

export const ToastWrapper = styled("div", {
  dflex: "center",
  position: "fixed",
  width: "350px",
  top: "$15",
  right: "$12",
  zIndex: "$max",
});

export const Toast: React.FC<
  ToastProps & {
    onClear?: (uid: React.Key) => void;
  }
> = (props) => {
  const { theme } = useTheme();

  const springs = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <animated.div
      style={{
        ...springs,
        width: 350,
      }}
    >
      <Card>
        <Card.Body>
          <Flex
            css={{
              alignItems: "center",
              gap: "$4",
              mb: "$4",
            }}
          >
            {props.icon ? (
              props.icon
            ) : (
              <Send
                set="bold"
                primaryColor={theme?.colors?.[props.type || "primary"].value}
              />
            )}
            <Text b>{props.title}</Text>
          </Flex>
          {props.description ? (
            <Text size="$sm" color="$accents8">
              {props.description}
            </Text>
          ) : null}
        </Card.Body>
      </Card>
    </animated.div>
  );
};
