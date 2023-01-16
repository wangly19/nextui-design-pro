export const setLegendSpacingPlugin = [
  {
    id: "increase-legend-spacing",
    beforeInit(chart: any) {
      const originalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        this.height += 12;
      };
    },
  },
]


export const setLegendStyle =  {
  position: "top" as const,
  align: "start" as const,
  labels: {
    boxHeight: 12,
    boxWidth: 12,
    useBorderRadius: true,
    pointStyle: "rectRounded",
    borderRadius: 3
  } as const,
}