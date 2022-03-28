import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { teal, blue, pink } from "@mui/material/colors";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartContainer = styled(Box)({
  backgroundColor: `${blue[50]}`,
  border: `1px solid ${blue[100]}`,
  borderRadius: "8px",
  padding: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
});

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "pie",
        },
        labels: ["Tik", "Hane"],
        colors: [`${blue[300]}`, `${pink[300]}`],
        dataLabels: {
          style: {
            fontSize: "12px",
            colors: [`${teal[50]}`],
          },
        },
        legend: {
          position: "bottom",
        },
        responsive: [
          {
            breakpoint: 600,
            colors: [`${blue[100]}`, `${pink[800]}`],
          },
        ],
      },
      series: [30, 40],
    };
  }

  render() {
    return (
      <ChartContainer>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="100%"
          height="320px"
        />
      </ChartContainer>
    );
  }
}

export default PieChart;
