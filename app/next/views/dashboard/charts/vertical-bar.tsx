import React from "react";
import { Card, Text } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { setLegendSpacingPlugin, setLegendStyle } from './config'
import { FlexBox } from "@/components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];

const defineDataSetConfig = {
  borderWidth: 2,
  borderRadius: 5,
  borderSkipped: false,
}

export const data: ChartData<'bar'> = {
  labels,
  datasets: [
    {
      label: "2022",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#0072F5",
      backgroundColor: "#0072F5",
      ...defineDataSetConfig,
    },
    {
      label: "2021",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#7828C8",
      backgroundColor: "#7828C8",
      ...defineDataSetConfig,
    },
  ],
};

export const VerticalBarCharts = () => {
  return (
    <Card isHoverable variant="flat" css={{ p: "$6" }}>
      <Card.Header>
        <FlexBox><Text b>GMV</Text></FlexBox>
      </Card.Header>
      <Card.Body
        css={{
          py: 0,
        }}
      >
        <Bar 
          plugins={setLegendSpacingPlugin}
          options={{
            responsive: true,
            scales: {
              x: {
                border: {
                  display: false
                },
                grid: {
                  display: false
                }
              }, 
              y: {
                display: false,
                border: {
                  display: false
                },
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: setLegendStyle
            },
          }}
          data={data}
        />
      </Card.Body>
    </Card>
  );
};
