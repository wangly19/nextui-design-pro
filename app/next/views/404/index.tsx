import * as React from 'react';
import { Button } from "@nextui-org/react";
import { Result } from "./result";
import { Flex } from "components/flex";
import { useRouter } from "next/router";

export const NotFoundError = () => {
  const router = useRouter();

  return (
    <Flex
      css={{
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Result
        title="Not Found"
        description="Please check and modify the following information before resubmitting."
      >
        <Flex
          css={{
            gap: "$8",
          }}
        >
          <Button bordered auto onClick={() => router.back()}>
            Go Back
          </Button>
          <Button auto onClick={() => router.replace("/")}>
            Go Home
          </Button>
        </Flex>
      </Result>
    </Flex>
  );
};

NotFoundError.isFluid = false;
