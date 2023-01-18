import * as React from "react";
import { Card } from "@nextui-org/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { setLegendSpacingPlugin, setLegendStyle } from "./config";
import { faker } from '@faker-js/faker'

ChartJS.register(ArcElement, Tooltip, Legend);

const labels =  ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]

const colors = ["#165DFF", "#14C9C9", "#F7BA1E", "#722ED1", "#3491FA", "#9FDB1D"]

export const data = {
  labels,
  datasets: [
    {
      label: "2022",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      backgroundColor:colors,
      borderColor: colors,
    },
  ],
};

export const PieCharts = () => {
  return (
    <Card isHoverable variant="flat" css={{ p: "$6" }}>
      <Card.Body
        css={{
          py: 0,
        }}
      >
        <Pie
          plugins={setLegendSpacingPlugin}
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top" as const,
                align: "start" as const,
                labels: {
                  boxHeight: 9,
                  boxWidth: 9,
                  usePointStyle: true,
                  pointStyle: "rectRounded"
                } as const,
              },
            },
          }}
        />
      </Card.Body>
    </Card>
  );
};
