import { Grid } from "@nextui-org/react";
import { DataCard } from "@/views/dashboard/data-card";
import { Profile } from "@/views/dashboard/profile";
import { Swipe } from "@/views/dashboard/swiper";
import { QuickEntry } from "@/views/dashboard/quick-entry";
import { FillLineCharts } from "@/views/dashboard/charts/fill-line";
import { VerticalBarCharts } from '@/views/dashboard/charts/vertical-bar'
import { LineCharts } from "@/views/dashboard/charts/line";
import { RadarCharts } from '@/views/dashboard/charts/radar'
import { DataTableCard } from '@/views/dashboard/data-table'
import { PieCharts } from '@/views/dashboard/charts/pie'
import { GroupLineCharts } from '@/views/dashboard/charts/group-line'
import { PolarAreaCharts } from '@/views/dashboard/charts/polar-area'


export const DashboardPage =  () => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      <Grid xs={6} sm={6} md={3} lg={3}>
        <DataCard
          title="TOTAL STAR"
          subText="vs last day"
          trendText="+4"
          content="200"
        />
      </Grid>
      <Grid xs={6} sm={6} md={3} lg={3}>
        <DataCard
          status="error"
          title="TOTAL SUBSCRIPTION"
          subText="vs last day"
          trendText="-1,012"
          content="9,100"
        />
      </Grid>
      <Grid xs={6} sm={6} md={3} lg={3}>
        <DataCard
          title="TOTAL CLICK RATE"
          subText="vs last day"
          trendText="+4%"
          content="32%"
        />
      </Grid>
      <Grid xs={6} sm={6} md={3} lg={3}>
        <DataCard
          title="TOTAL LIKE"
          subText="vs last day"
          trendText="+300"
          content="2,120"
        />
      </Grid>
      <Grid xs={12} lg={9}>
        <Swipe />
      </Grid>
      <Grid xs={12} lg={3} >
        <Grid.Container alignItems="flex-start" >
          <Grid xs={6} lg={12} ><Profile /></Grid>
          <Grid xs={6} lg={12} ><QuickEntry /></Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12} lg={12}>
        <LineCharts />
      </Grid>
      <Grid xs={6} lg={3} >
        <PolarAreaCharts/>
      </Grid>
      <Grid xs={6} lg={3}>
        <FillLineCharts />
      </Grid>
      <Grid xs={6} lg={3}>
        <PieCharts />
      </Grid>
      <Grid xs={6} lg={3}>
        <RadarCharts />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6}>
        <VerticalBarCharts />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6}>
        <GroupLineCharts />
      </Grid>
      <Grid xs={12} lg={12} >
        <DataTableCard/>
      </Grid>
    </Grid.Container>
  );
};
