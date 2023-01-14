import { Spacer, styled, Text } from "@nextui-org/react";
import { Box } from "components/box";
import { ShieldDone } from "react-iconly";

export interface ResultProps {
  title: string;
  children?: React.ReactNode,
  description?: string;
}

const SendIcon = styled(ShieldDone);

export const Result: React.FC<ResultProps> = (props) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bg: '$error',
          borderRadius: '100%',
          p: '$lg',
          mb: '$10'
        }}
      >
        <SendIcon
          css={{
            width: 90,
            height: 90,
            color: "$background",
          }}
        />
      </Box>
      <Text h3>{props.title}</Text>
      
      {props.description ? <Text color="$accents7">
        {props.description}
      </Text> : null}
      <Spacer y={1} />
      {props.children ? props.children : null}
    </Box>
  );
};
