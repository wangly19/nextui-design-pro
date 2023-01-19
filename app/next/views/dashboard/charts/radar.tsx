import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { faker } from '@faker-js/faker'
import { Card, Text, useTheme } from "@nextui-org/react";
import { setLegendSpacingPlugin, setLegendStyle } from "./config";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = ['KDA', 'DPM', 'GD@10', 'DMG%', 'XPD@10']

export const data: ChartData<"radar", number[], string> = {
  labels: labels,
  datasets: [
    {
      label: "standard",
      data: labels.map(() => 50),
      backgroundColor: 'rgba(22, 93, 255, 0.7)',
    },
    {
      label: "#2",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 90 })),
      backgroundColor: 'rgba(247,186, 30, 0.7)',
    },
  ],
};

export const RadarCharts = () => {
  const { theme } = useTheme();
  return (
    <Card isHoverable variant="flat" css={{ p: "$6" }}>
      <Card.Body
        css={{
          py: 0,
        }}
      >
        <Radar
          plugins={setLegendSpacingPlugin}
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                min: 10,
                max: 100,
                angleLines: {
                  color: theme?.colors.border.value,
                },
                ticks: {
                  display: false,
                },
                grid: {
                  color: theme?.colors.border.value,
                },

                pointLabels: {
                  color: theme?.colors.text.value,
                },
              },
            },
            plugins: {
              legend: setLegendStyle,
            },
          }}
        />
      </Card.Body>
    </Card>
  );
};
