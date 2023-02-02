import { Box, FlexBox } from "@/components";
import { Button, Grid, Text, Image } from "@nextui-org/react";
import * as React from "react";
import { Heart2 } from "react-iconly"

export const HomePageView = () => {
  return (
    <Grid.Container
      gap={2}
      justify="center"
    >
      <Grid
        xs={12}
        lg={5}
        justify="center"
        css={{
          flexDirection: "column",
          height: 600
        }}
      >
        <Text h1 color="primary">
          Move faster
        </Text>
        <Text h1>
          with intuitive 
          React UI tools
        </Text>
        <Text>
        Beautiful, fast and modern React UI library.
        </Text>
        <FlexBox mt="$12" gap="$4" >
          <Button size="lg" auto>
            Get started
          </Button>
          <Button size="lg" flat auto icon={<Heart2 set="bold" primaryColor="red" />} >
            Sponsor
          </Button>
        </FlexBox>
      </Grid>

      <Grid xs={12} lg={7} justify="flex-start">
        <Image height={600} src="https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </Grid>
    </Grid.Container>
  );
};
