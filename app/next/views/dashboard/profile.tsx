import { FlexBox } from "@/components";
import { Card, Grid, Text, Link, Avatar, useTheme, Progress } from "@nextui-org/react";
import { Notification } from 'react-iconly'

export const Profile = () => {

  const { theme } = useTheme()

  return (
    <Card variant="flat" css={{ p: "$6", height: "max-content"}}>
      <Card.Header>
        <Avatar color="gradient" squared icon={<Notification set="bold" primaryColor={theme?.colors.background.value} />} />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text b css={{ lineHeight: "$xs" }}>
              System
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text size="$xs" css={{ color: "$accents8" }}>Almost there</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Fill in some more information about you and your person.
        </Text>
        <Progress value={30} color="primary" css={{
          mt: '$4'
        }} />
      </Card.Body>
      <Card.Footer>
        <FlexBox gap="$8" >
          <Link>perfect »</Link>
        </FlexBox>
      </Card.Footer>
    </Card>
  );
};
