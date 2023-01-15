import { Box } from "@/components/box";
import { Container, Grid, Text, Spacer, Row } from "@nextui-org/react";
import { LoginForm } from "./form";
import { HomeDescription } from "./description";
import { Brand } from "layout/navbar/brand";
import { SwitchTheme } from "./switch";
import { FlexBox } from "@/components";

export const LoginPage = () => {
  return (
    <Box
      css={{
        height: "100vh",
        bg: "linear-gradient(to right, $linkLight 0%,$linkLight 50%, $background 50.01%,$background 100%)",
        boxSizing: "border-box",
      }}
    >
      <Container lg>
        <Grid.Container
          justify="center"
          css={{
            height: "100vh",
          }}
        >
          <Grid
            xs={6}
            justify="space-between"
            direction="column"
            css={{
              pr: "$8",
            }}
          >
            <Brand
              css={{
                pt: "$16",
              }}
            />
            <HomeDescription />
            <Text css={{
              pb: '$16'
            }} color="$neutral">© 2023 wangly19. All rights reserved.</Text>
          </Grid>
          <Grid xs={6} justify="center">
            <FlexBox
              w={370}
              flexDirection="column"
              jc="space-between"
              ai="center"
            >
              <SwitchTheme />
              <Box css={{
                width: '100%'
              }} >
                <Text h2>Hi, Welcome Back! 😺 </Text>
                <Spacer />
                <LoginForm />
              </Box>
              <Spacer />
            </FlexBox>
          </Grid>
        </Grid.Container>
      </Container>
    </Box>
  );
};

LoginPage.isFluid = false;
