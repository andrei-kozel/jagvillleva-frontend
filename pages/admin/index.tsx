import { Grid, styled } from "@mui/material";
import React, { ReactElement } from "react";
import BarChart from "../../components/admin/Charts/BarChart";
import PieChart from "../../components/admin/Charts/PieChart";

import Card from "../../components/Card";
import AdminLayout from "./../../layouts/AdminLayout";

const GridContainer = styled(Grid)({
  minWidth: "100%",
});

const Index = () => {
  return (
    <GridContainer container spacing={2}>
      <Grid item xs={12} md={4} lg={4}>
        <Card
          color="teal"
          icon="pets"
          value={500}
          title="Total amount of pets"
        />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Card
          color="orange"
          icon="pets"
          value={500}
          title="Total amount of pets"
        />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Card
          color="blue"
          icon="pets"
          value={500}
          title="Total amount of pets"
        />
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        <PieChart />
      </Grid>
      <Grid item xs={12} md={8} xl={6}>
        <BarChart />
      </Grid>
    </GridContainer>
  );
};

export default Index;

Index.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
