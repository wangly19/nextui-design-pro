import * as React from "react";
import { Flex, FlexBox } from "@/components";
import { Avatar, Button } from "@nextui-org/react";
import { ShieldDone, Delete } from "react-iconly";
import { useBoolean } from "react-use";
import { Close } from "icons";

export interface AlertProps {
  type?: keyof typeof typeCssMap;
  showClose?: boolean;
  visible?: boolean;
  onVisibleChange?: (newState: boolean) => void;
  children?: React.ReactNode;
}

const typeCssMap = {
  success: "$green300",
  primary: "$blue300",
  warning: "$yellow300",
  error: "$red300",
};

export const Alert: React.FC<AlertProps> = ({
  type = "primary",
  visible,
  onVisibleChange,
  children,
}) => {
  const [show, toggle] = useBoolean(true);

  /** close alert.  */
  const handleCloseAlert = () => {
    onVisibleChange && onVisibleChange(false);
    setTimeout(() => toggle(false), 200);
  };

  // init alert open state.
  React.useEffect(() => {
    if (typeof visible === "boolean") {
      toggle(visible);
    }
  }, [visible]);

  if (!show) {
    return null;
  }

  return (
    <FlexBox
      mx="$4"
      mb="$4"
      p="$xs $md"
      bg={typeCssMap?.[type]}
      gap="$8"
      borderRadius="$base"
    >
      <Avatar
        color={type}
        icon={
          <Flex
            as={ShieldDone}
            set="bold"
            css={{
              color: "$background",
            }}
          />
        }
      />
      <FlexBox flexWrap="wrap" flex={1}>
        {children || undefined}
      </FlexBox>
      <Button auto color={type} size="sm" onClick={handleCloseAlert}>
        OK
      </Button>
    </FlexBox>
  );
};
