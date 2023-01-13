import * as React from "react";
import { styled } from "@nextui-org/react";

export const Flex = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const FlexBox: React.FC<
  {
    children?: React.ReactNode;
    css?: React.ComponentProps<typeof Flex>["css"]
  } & React.ComponentProps<typeof Flex>["css"]
> = ({ children, css, ...styledProps }) => {
  return <Flex css={{
    ...css,
    ...styledProps
  }}>{children}</Flex>;
};
