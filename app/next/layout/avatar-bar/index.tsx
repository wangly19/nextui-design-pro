import { Navbar, Text, Avatar, Input } from "@nextui-org/react";
import { Icon } from "./icon";
import { Setting, ShieldDone, Chart, Search } from "react-iconly";
import { NotificationDown } from "./notification";
import { Spotlight, SpotlightInstance } from "@/components/spotlight";
import { useRef } from "react";
import { useToast } from "components/toast";
import { LightMode } from "./mode";
import { UserPopover } from "./user";

export const AvatarBar = () => {
  const spotlightRef = useRef<SpotlightInstance>(null);
  const { add } = useToast();

  return (
    <Navbar.Content
      gap={14}
      css={{
        "@xsMax": {
          w: "100%",
          jc: "space-between",
        },
      }}
    >
      <Spotlight ref={spotlightRef} />
      <Navbar.Item
        css={{
          "@xsMax": {
            w: "100%",
            jc: "center",
          },
        }}
      >
        <Input
        //  contentRight={<Text b size="$sm" color="primary" >⌘/</Text>}
          contentLeft={
            <Icon
              as={Search}
              style={{
                width: 20,
                height: 20,
              }}
            />
          }
          contentLeftStyling={false}
          css={{
            w: "100%",
            "@xsMax": {
              mw: "300px",
            },
            "& .nextui-input-content--left": {
              h: "100%",
              ml: "$4",
              dflex: "center",
            },
          }}
          placeholder="Search..."
        />
      </Navbar.Item>
      <LightMode />
      <NotificationDown />

      <Navbar.Item
        onClick={() =>
          add({
            type: "success",
            title: "title",
            description: "description",
          })
        }
      >
        <Icon as={Chart} set="bold" />
      </Navbar.Item>
      <Navbar.Item>
        <Icon as={ShieldDone} set="bold"></Icon>
      </Navbar.Item>
      <Navbar.Item>
        <Icon as={Setting} set="bold"></Icon>
      </Navbar.Item>

      <UserPopover />
    </Navbar.Content>
  );
};
