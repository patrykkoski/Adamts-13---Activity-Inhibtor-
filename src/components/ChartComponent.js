import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {`P - ${label}%  `}
          <br />
          {`A - ${payload[0].value}`}
        </p>
      </div>
    );
  }

  return null;
};

const ChartComponent = React.memo(props => {
  const chartDataFromProps = props.data.map(d => {
    console.log(d.x);
    return { x: parseFloat(d.x), Absorbancja: parseFloat(d.y) };
  });
  let xDataFromProps = props.data.map(d => {
    return d.x;
  });
  let chartData;
  if (xDataFromProps.includes("0")) {
    chartData = chartDataFromProps.slice();
  } else {
    chartData = [{ x: 0, Absorbancja: 0 }].concat(chartDataFromProps);
  }

  return (
    <div className="chart-wrapper">
      <div className="chart-wrapper__header">
        <h3>Wykres [Absorbancja / %]</h3>
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
          >
            <Label value="%" position="right" offset={15} />
          </XAxis>
          <YAxis type="number" domain={[0, "dataMax"]}>
            <Label value="A" position="insideTop" />
          </YAxis>
          <Tooltip content={CustomTooltip} />
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
