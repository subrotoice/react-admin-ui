import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./BarChartBox.css";

interface ChartProps {
  title: string;
  chartData: object[];
  dataKey: string;
  color: string;
}

const BarChartBox = ({ title, chartData, color, dataKey }: ChartProps) => {
  return (
    <div className="barChartBox">
      <h2>{title}</h2>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={chartData}>
          <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
