import { Badge, Dropdown, Navbar, Avatar } from "@nextui-org/react";
import { Notification, Delete } from "react-iconly";
import { Icon } from "./icon";

const mockMessageData = [
  {
    key: "1",
    name: "Tom",
    description:
      "ACME scales apps to meet user demand, automagically, based on load.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    key: "2",
    name: "Jack",
    description:
      "ACME scales apps to meet user demand, automagically, based on load.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
];

export const NotificationDown = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Navbar.Item>
          <Badge color="error" content={mockMessageData.length}>
            <Icon as={Notification} set="bold" />
          </Badge>
        </Navbar.Item>
      </Dropdown.Trigger>
      <Dropdown.Menu aria-label="Notifications">
        <Dropdown.Section title="Notifications">
          {mockMessageData.map((record) => (
            <Dropdown.Item
              css={{
                $$dropdownItemHeight: "50px",
              }}
              key={record.key}
              description={record.description}
              icon={<Avatar squared size="md" src={record.avatar} />}
            >
              {record.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Section>
        <Dropdown.Section title="Actions">
          <Dropdown.Item
            key="clear-notification"
            color="error"
            description="Permanently delete the file"
            icon={<Delete set="bold" />}
          >
            ClearNotification
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
};
