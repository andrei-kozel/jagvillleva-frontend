import { Grid, styled } from "@mui/material";
import React, { ReactElement } from "react";
import Card from "../../components/Card";
import AdminLayout from "./../../layouts/AdminLayout";

const GridContainer = styled(Grid)({
  minWidth: "100%",
});

const Index = () => {
  return (
    <GridContainer container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          color="teal"
          icon="pets"
          value={500}
          title="Total amount of pets"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          color="orange"
          icon="pets"
          value={500}
          title="Total amount of pets"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          color="blue"
          icon="pets"
          value={500}
          title="Total amount of pets"
        />
      </Grid>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}></Grid>
    </GridContainer>
  );
};

export default Index;

Index.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
