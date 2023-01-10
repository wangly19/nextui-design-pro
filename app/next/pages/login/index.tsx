import { Box } from "@/components/box";
import { Container, Grid, Text, Spacer, Row } from "@nextui-org/react";
import { LoginForm } from "./form";
import { HomeDescription } from "./description";
import { Brand } from "layout/navbar/brand";
import { SwitchTheme } from './switch'

const LoginPage = () => {
  return (
    <Box
      css={{
        height: "100vh",
        bg: "linear-gradient(to right, $selection 0%,$selection 50%, $background 50.01%,$background 100%)",
        boxSizing: "border-box",
      }}
    >
      <Container lg>
        <Grid.Container
          justify="center"
          css={{
            height: "85vh",
          }}
        >
          <Grid xs={6} justify="space-between" direction="column">
            <Brand
              css={{
                pt: "$16",
              }}
            />
            <HomeDescription />
            <Text color="$neutral">© 2023 wangly19. All rights reserved.</Text>
          </Grid>
          <Grid xs={2}></Grid>
          <Grid
            xs={4}
            direction="column"
            alignItems="flex-start"
            justify="center"
            css={{
              px: "$12",
              position: 'relative',
            }}
          >
            <SwitchTheme />
            <Text h2>Hi, Welcome Back! 😺 </Text>
              <Spacer />
              <LoginForm />
          </Grid>
        </Grid.Container>
      </Container>
    </Box>
  );
};

LoginPage.isFluid = false;

export default LoginPage;
