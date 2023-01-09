import { Logo } from "./logo";
import { Row, Text, RowProps } from "@nextui-org/react";

export const Brand: React.FC<RowProps> = (props) => {
  return (
    <Row
      align="center"
      {...props}
    >
      <Logo />
      <Text b size="$xl">
        NextUI Pro
      </Text>
    </Row>
  );
};
