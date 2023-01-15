import React from "react";
import { Modal, Input, Button } from "@nextui-org/react";
import { useBoolean } from "react-use";

export interface SpotlightInstance {
  open: () => void;
}

export const Spotlight = React.forwardRef<SpotlightInstance, {}>(
  (props, ref) => {
    const [isOpen, toggle] = useBoolean(false);

    React.useImperativeHandle(ref, () => ({
      open: () => toggle(true),
    }));

    return (
      <Modal
        blur
        noPadding
        autoMargin
        aria-labelledby="spotlight-modal"
        open={isOpen}
        onClose={toggle}
        width="650px"
      >
        <Modal.Body>
          <Input 
        underlined color="default" shadow={false} bordered={false} placeholder="Next UI" />
        </Modal.Body>
      </Modal>
    );
  }
);
