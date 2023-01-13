import * as React from "react";
import { Container, styled } from "@nextui-org/react";
import { default as NavBar } from "../navbar";
import { Alert } from "components";

interface RootLayoutProps {
  children?: React.ReactNode;
  isLayout?: boolean;
}

const Box = styled("div", {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  minHeight: "100vh",
  height: "auto",
});

export default function ({
  children,
  isLayout = true,
}: RootLayoutProps): React.ReactElement {
  if (!isLayout) return <>{children}</>;

  return (
    <Box>
      <NavBar />
      <Container
        lg
        css={{
          pt: "$10",
          bg: '$background'
        }}
      >
        <Alert type="primary">
          You seem to have a new version update that year, please refresh the
          page when you are free.
        </Alert>
        {children}
      </Container>
    </Box>
  );
}
