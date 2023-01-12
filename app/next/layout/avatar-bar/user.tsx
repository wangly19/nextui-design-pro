import {
  Popover,
  User,
  Row,
  Col,
  Text,
  Button,
  Spacer,
  Grid,
  Navbar,
  Avatar,
} from "@nextui-org/react";
import { Logout } from "react-iconly";
import { useRouter } from 'next/router'
import { useToast } from "@/components/toast";

export const UserPopover = () => {

  const router = useRouter()
  const { toast } = useToast()

  /** @desc handle user logout event. */
  const handleUserLogoutClick = () => {
    toast({
      title: 'Logout',
      description: 'Looking forward to the next meeting.'
    })
    router.replace('/login')
    
  }

  /** @desc handle user follow event. */
  const handleUserFollowClick = () => {
  }

  return (
    <Popover>
      <Navbar.Item>
        <Popover.Trigger>
          <Avatar
            css={{
              cursor: "pointer",
            }}
            src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
            color="gradient"
            bordered
            squared
          />
        </Popover.Trigger>
      </Navbar.Item>
      <Popover.Content css={{ px: "$4", py: "$2" }}>
        <Grid.Container
          className="user-twitter-card__container"
          css={{
            mw: "270px",
            borderRadius: "$lg",
            padding: "$sm",
          }}
        >
          <Row justify="space-around" align="center">
            <Col span={8}>
              <User
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                name="wangly19"
                description="UX & Web"
                css={{ px: 0 }}
              />
            </Col>
            <Col span={4}>
              <Row>
                <Button auto rounded color="primary" size="sm">
                  Follow
                </Button>
              </Row>
            </Col>
          </Row>
          <Grid.Container className="user-twitter-card__username-container">
            <Grid xs={12}>
              <Text
                className="user-twitter-card__text"
                size={14}
                css={{ mt: "$1" }}
                color="#888888"
              >
                Full-stack developer, @getnextui lover she/her 🎉
              </Text>
            </Grid>
          </Grid.Container>

          <Grid.Container
            className="user-twitter-card__metrics-container"
            justify="flex-start"
            alignContent="center"
          >
            <Text className="user-twitter-card__text" size={14} color="#888888">
              <Text
                b
                color="foreground"
                className="user-twitter-card__text"
                size={14}
              >
                4
              </Text>
              Following
            </Text>
            <Spacer inline x={0.5} />
            <Text className="user-twitter-card__text" size={14} color="#888888">
              <Text
                b
                color="foreground"
                className="user-twitter-card__text"
                size={14}
              >
                97.1K
              </Text>
              Followers
            </Text>
          </Grid.Container>
        </Grid.Container>
        <Row css={{
          pb: '$8',
          px: '$8'
        }} justify="center" >
          <Button shadow color="error" icon={<Logout />} onClick={handleUserLogoutClick} >Logout</Button>
        </Row>
      </Popover.Content>
    </Popover>
  );
};
