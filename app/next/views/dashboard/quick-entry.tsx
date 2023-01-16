import * as React from 'react';
import { FlexBox } from "@/components";
import { Text, Avatar, Card, Tooltip, Button } from "@nextui-org/react";
import { Home, ShieldDone, Chart, Heart, Setting } from "react-iconly";

const EntryLink = (props: {
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <Tooltip placement="bottom" content={props.description} >
      <Button auto flat icon={props.icon} />
    </Tooltip>
  )
}

export const QuickEntry = () => {
  return (
    <Card variant="flat" css={{p: '$6'}}>
      <Card.Header >
        <Text b>QuickEntry</Text>
      </Card.Header>
      <Card.Body css={{pt: 0}} >
        <FlexBox justifyContent="space-between" alignItems="center">
          <EntryLink icon={<Home set="bold" />} description="Home" />
          <EntryLink icon={<ShieldDone set="bold" />} description="ShieldDone" />
          <EntryLink icon={<Chart set="bold" />} description="Chart" />
          <EntryLink icon={<Heart set="bold" />} description="Heart" />
          <EntryLink icon={<Setting set="bold" />} description="Setting" />
        </FlexBox>
      </Card.Body>
    </Card>
  );
};
