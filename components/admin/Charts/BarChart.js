import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { blue, grey, teal, yellow } from "@mui/material/colors";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartContainer = styled(Box)({
  backgroundColor: `${teal[50]}`,
  borderRadius: "8px",
  padding: "16px",
  maxHeight: "350px",
  border: `1px solid ${teal[100]}`,

  "& .apexcharts-menu-icon": {
    display: "none",
  },
});

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },

        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Maj",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dec",
          ],
        },
        title: {
          text: "Dogs added every month",
        },
        colors: [`${teal[400]}`],
        responsive: [
          {
            breakpoint: 600,
            options: {
              chart: {
                type: "bar",
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
            },
            colors: [`${teal[900]}`],
          },
        ],
      },
      series: [
        {
          name: "Amount",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 90, 110, 20],
        },
      ],
    };
  }

  render() {
    return (
      <ChartContainer>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
          height="320px"
        />
      </ChartContainer>
    );
  }
}

export default BarChart;
