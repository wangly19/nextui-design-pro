import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from "chart.js";
import { Card, Text, useTheme } from "@nextui-org/react";
import { Bar } from "react-chartjs-2";
import { setLegendSpacingPlugin, setLegendStyle } from './config'
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const defineConfig = {
  borderWidth: 2,
  borderRadius: 5,
  borderSkipped: false,
}

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const showCase = ['']

export const data: ChartData<'bar', number[], string> = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "#F7BA1E",
      borderColor: "#F7BA1E",
      stack: "Stack 0",
      ...defineConfig,
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "#14C9C9",
      borderColor: "#14C9C9",
      stack: "Stack 0",
      ...defineConfig,
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "#165DFF",
      borderColor: "#165DFF",
      stack: "Stack 1",
      ...defineConfig,
    },
  ],
};

export const GroupLineCharts = () => {

  const { theme  } = useTheme()

  return (
    <Card isHoverable variant="flat" css={{ p: "$6" }}>
      <Card.Header>
        <Text b>GMV</Text>
      </Card.Header>
      <Card.Body
        css={{
          py: 0,
        }}
      >
        <Bar
          plugins={setLegendSpacingPlugin}
          options={{
            plugins: {
              legend: setLegendStyle,
            },
            responsive: true,
            interaction: {
              mode: "index" as const,
              intersect: false,
            },
            scales: {
              y: {
                min: -1000,
                max: 1000,
                stacked: true,
                title: {
                  display: true,
                  text: "Unit(W)",
                  color: theme?.colors.primary.value,
                  font: {
                    weight: "bold",
                  },
                },
                border: {
                  dash: [10, 10],
                  width: 0,
                  color: "red",
                },
                grid: {
                  color: theme?.colors.neutralBorder.value,
                  lineWidth: 1.5,
                },
              },
              x: {
                stacked: true,
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                },
              },
            },
          }}
          data={data}
        />
      </Card.Body>
    </Card>
  );
};
