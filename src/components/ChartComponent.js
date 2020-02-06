import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "../App.css";

const CustomizedAxisTick = props => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text dy={16} textAnchor="middle" fill="#666">
        {payload.value}
      </text>
    </g>
  );
};
const ChartComponent = React.memo(props => {
  const chartDataFromProps = props.data.map(d => {
    return { x: d.x + "%", Absorbancja: parseFloat(d.y) };
  });

  const chartData = [{ x: "0%", Absorbancja: 0 }].concat(chartDataFromProps);

  return (
    <div className="chart-wrapper">
      <div className="chart-wrapper__header">
        <h3>Wykres</h3>
      </div>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="x"
            tick={<CustomizedAxisTick />}
            domain={[0, "dataMax"]}
          />
          <YAxis type="number" domain={[0, "dataMax"]} />
          <Tooltip />
          <Legend />
          <Line
            type="basic"
            dataKey="Absorbancja"
            stroke="rgb(103, 149, 209)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

export default ChartComponent;
