import * as React from "react";
import {
  Card,
  Col,
  Row,
  Table,
  Text,
  User,
  Badge,
  BadgeProps,
} from "@nextui-org/react";
import { FlexBox } from "@/components";
import { Chart, Graph, Delete } from "react-iconly";
import { Icon } from 'layout/avatar-bar/icon'

interface UserType {
  id: string | number;
  name?: string;
  email?: string;
  role?: string;
  team?: string;
  status: BadgeProps["color"];
  age?: string;
  avatar?: string;
  actions?: string;
}

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions", w: "60px" },
];

const users: UserType[] = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "primary",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "error",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "primary",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "warning",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "primary",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

export const DataTableCard = () => {
  const renderCell = (user: Record<string, any>, columnKey: React.Key) => {
    const cellValue = user?.[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user?.avatar} name={cellValue} css={{ p: 0 }}>
            {user?.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user?.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return (
          <Badge enableShadow color={cellValue} disableOutline>
            {cellValue}
          </Badge>
        );

      case "actions":
        return (
          <FlexBox jc="center" ai="center" gap="$4">
            <Icon as={Chart} set="bold"  />
            <Icon as={Graph} set="bold"  />
            <Icon as={Delete} set="bold" css={{
              color: '$error'
            }} />
          </FlexBox>
        );
      default:
        return cellValue;
    }
  };

  return (
    <Card isHoverable variant="flat" css={{}}>
      <Card.Header
        css={{
          pb: 0,
          pt: "$md",
        }}
      >
        <FlexBox px="$sm" fd="column" alignItems="flex-start">
          <Text b>Latest Activity</Text>
          <Text
            size="$sm"
            css={{
              color: "$accents6",
            }}
          >
            last updated 3 hours ago
          </Text>
        </FlexBox>
      </Card.Header>
      <Card.Body
        css={{
          p: 0,
        }}
      >
        <Table
          aria-label="Example table with custom cells"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
          selectionMode="none"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
                css={{
                  bg: "$primary",
                  color: "$white",
                  width: column.w,
                }}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={users}>
            {(item: UserType) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Card.Body>
    </Card>
  );
};
