import * as React from "react";
import { Box } from "@/components/box";
import { Flex, FlexBox } from "@/components/flex";
import { Text, Avatar } from "@nextui-org/react";

const pictureUsers = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
];

export const HomeDescription = () => {
  return (
    <Box
      css={{
        width: "100%",
      }}
    >
      <Text h1> Sign In to </Text>
      <Text h2> NextUI Design Pro </Text>
      <Text
        h3
        css={{
          textGradient:
            "112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%",
        }}
      >
        Use templates to quickly create your projects.
      </Text>
      <FlexBox gap="$8" mt="$12" flexWrap="wrap" >
        <Avatar.Group>
          {pictureUsers.map((url, index) => (
            <Avatar
              key={index}
              size="lg"
              pointer
              src={url}
              bordered
              color="gradient"
              stacked
            />
          ))}
        </Avatar.Group>
        <Text b>Join Web Developer.</Text>
      </FlexBox>
    </Box>
  );
};
