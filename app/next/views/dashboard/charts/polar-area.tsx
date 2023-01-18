import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { Card, Text, useTheme } from "@nextui-org/react";
import { setLegendSpacingPlugin, setLegendStyle } from "./config";


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const colors = ["#165DFF", "#14C9C9", "#F7BA1E", "#722ED1", "#3491FA", "#9FDB1D"]

export const data: ChartData<"polarArea", number[], string> = {
  labels: ["#L1", "#L2", "#L3", "#L4", "#L5", "#L6"],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1,
    },
  ],
};

export const PolarAreaCharts = () => {
  const { theme } = useTheme();
  return (
    <Card isHoverable variant="flat" css={{ p: "$6", h: '350px' }}>
      <Card.Body
        css={{
          py: 0,
        }}
      >
        <PolarArea
          plugins={setLegendSpacingPlugin}
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
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
