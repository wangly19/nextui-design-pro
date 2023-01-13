import { Row, styled, Text } from "@nextui-org/react";
import React from "react";

export const Divider = styled("hr", {
  height: 0,
  opacity: 1,
  borderImage: "initial",
  borderWidth: "0px 0px 1px",
  width: "100%",
  borderStyle: "solid",
  borderColor: "$accents3",
});

export const TextDivider: React.FC<{
  text: string;
}> = ({ text }) => {
  return (
    <Row
      css={{
        my: "$4",
        px: "$4",
      }}
      align="center"
      justify="space-between"
    >
      <Divider />
      <Text
        color="$neutral"
        css={{
          px: "$8",
        }}
      >
        {text}
      </Text>
      <Divider />
    </Row>
  );
};
