import { Button, Text, Dropdown } from "@nextui-org/react";
import { FlexBox } from "@/components";
import { Category } from "react-iconly";

export const ProTableToolBox = () => {
  return (
    <FlexBox px="$sm" py="$md" w="100%" jc="space-between">
      <Text b size="$lg">
        Pro Table Header
      </Text>
      <FlexBox gap="$4">
        <Button auto size="sm">
          Create
        </Button>
        <Dropdown>
          <Dropdown.Trigger>
          <Button bordered auto size="sm" >
            <Category set="bold" size="small" />
          </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="new">New file</Dropdown.Item>
            <Dropdown.Item key="copy">Copy link</Dropdown.Item>
            <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            <Dropdown.Item key="delete" color="error">
              Delete file
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </FlexBox>
    </FlexBox>
  );
};
