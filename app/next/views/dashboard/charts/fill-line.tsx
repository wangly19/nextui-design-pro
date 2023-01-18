import React from "react";
import { Card, useTheme, Text, Badge, Row } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Box, FlexBox } from "@/components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data: ChartData<"line", number[], string> = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#33A6FF",
      backgroundColor: "#33A6FF",
      pointStyle: false,
    },
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#1FCCAD",
      backgroundColor: "#1FCCAD",
      pointStyle: false,
    },
  ],
};

export const FillLineCharts = () => {
  const { theme } = useTheme();

  return (
    <Card isHoverable variant="flat">
      <Card.Body
        css={{
          p: 0,
          m: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <FlexBox gap="$8" px="calc($sm + $sm)" pt="$sm">
          {data.datasets?.map((line) => (
            <FlexBox key={line.label} align="center" gap="$2">
              <Box
                css={{
                  h: 14,
                  w: 14,
                  br: "100%",
                  bg: line.backgroundColor as string,
                }}
              />
              <Text size="$sm">{line.label}</Text>
            </FlexBox>
          ))}
        </FlexBox>
        <FlexBox flex={1} mx={-5} mb={-5} mt="$xl">
          <Line
            options={{
              responsive: true,
              maintainAspectRatio: false,
              animations: {
                tension: {
                  duration: 1000,
                  easing: "linear",
                  from: 0,
                  to: 0.4,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            data={data}
          />
        </FlexBox>
      </Card.Body>
    </Card>
  );
};
