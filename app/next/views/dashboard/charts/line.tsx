import { Card, useTheme, Text } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Box } from "components";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { setLegendSpacingPlugin } from "./config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

const defaultLineDataSet = {
  pointStyle: "rectRounded",
  pointBorderWidth: 5,
};

export const data: ChartData<"line", number[], string> = {
  labels,
  datasets: [
    {
      label: "2020",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "#0072F5",
      backgroundColor: "#0072F5",
      ...defaultLineDataSet,
    },
    {
      label: "2021",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "#F31260",
      backgroundColor: "#F31260",
      ...defaultLineDataSet,
    },
    {
      label: "2022",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "#7828C8",
      backgroundColor: "#7828C8",
      ...defaultLineDataSet,
    },
    {
      label: "2023",
      data: [1, 2].map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "#F5A524",
      backgroundColor: "#F5A524",
      ...defaultLineDataSet,
    },
  ],
};

export const LineCharts = () => {
  const { theme } = useTheme();
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
        <Box
          css={{
            position: "relative",
            w: "100%",
            height: "350px",
            overflow: "auto",
          }}
        >
          <Line
            plugins={setLegendSpacingPlugin}
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
                y: {
                  min: 100,
                  max: 500,
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
                  border: {
                    display: false,
                  },
                  grid: {
                    display: false,
                  },
                },
              },
              plugins: {
                legend: {
                  position: "top",
                  align: "start",
                  labels: {
                    boxHeight: 12,
                    boxWidth: 12,
                    color: theme?.colors.text.value,
                    useBorderRadius: true,
                    borderRadius: 3,
                  },
                },
                tooltip: {
                  mode: "index"
                },
              },
            }}
            data={data}
          />
        </Box>
      </Card.Body>
    </Card>
  );
};
