import * as React from "react";
import { Card, Text, Grid, Container, Button } from "@nextui-org/react";
import { Flex } from "@/components/flex";
import { Scan } from "react-iconly";

export interface DataCardProps {
  status?: "success" | "error";
  title: string;
  subText: string;
  content: React.ReactNode;
  trendText?: string;
}

export const DataCard: React.FC<DataCardProps> = ({
  status = "success",
  title,
  subText,
  content,
  trendText,
}) => {
  return (
    <Card isHoverable variant="flat">
      <Card.Body>
        <Grid.Container>
          <Grid xs={10}>
            <Container fluid>
              <Text size="$sm" color="$accents7" transform="uppercase" >
                {title}
              </Text>
              <Text h3>{content}</Text>
              <Flex>
                <Text
                  css={{
                    mr: "$3",
                    fontWeight: "$bold",
                    color: `$${status}`,
                    display: "inline",
                  }}
                >
                  {trendText}
                </Text>
                <Text color="$accents7">{subText}</Text>
              </Flex>
            </Container>
          </Grid>
          <Grid xs={2}>
            <Button auto color="primary" icon={<Scan set="bold" />} />
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};
