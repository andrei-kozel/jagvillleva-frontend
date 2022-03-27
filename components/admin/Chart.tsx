import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const chartData: IDataItem[] = [
  { month: "Jan", value: 2.525 },
  { month: "Feb", value: 3.018 },
  { month: "Mar", value: 3.682 },
  { month: "April", value: 4.44 },
  { month: "Maj", value: 5.31 },
  { month: "June", value: 6.127 },
  { month: "July", value: 6.93 },
  { month: "Aug", value: 6.93 },
  { month: "Sep", value: 6.93 },
  { month: "Oct", value: 6.93 },
  { month: "Nov", value: 6.93 },
  { month: "Dec", value: 6.93 },
];

interface IDataItem {
  month: string;
  value: number;
}

export default class ChartDemo extends React.Component<object, object> {
  render(): React.ReactNode {
    return (
      <Paper sx={{ borderRadius: "8px", boxShadow: "none" }}>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField="value" argumentField="month" />
          <Title text="Total Dogs" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
