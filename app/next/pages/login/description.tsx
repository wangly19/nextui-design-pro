import * as React from "react";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
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
    <Box css={{
      width: '100%'
    }} >
      <Text h1> Sign In to </Text>
      <Text h2> NextUI Design Pro </Text>
      <Text h3 css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }} >
        Create an account and discover the worlds' best UI component framework.
      </Text>
      <Flex css={{
        gap: '$8',
        mt: '$12'
      }} >
        <Avatar.Group >
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
      </Flex>
    </Box>
  );
};
