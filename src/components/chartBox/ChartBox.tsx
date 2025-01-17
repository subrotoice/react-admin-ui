import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./ChartBox.css";
import { Link } from "react-router-dom";

interface ChartProps {
  title: string;
  icon: string;
  number: string | string;
  chartData: object[];
  dataKey: string;
  color: string;
  percentage: number;
}

const ChartBox = ({
  title,
  icon,
  number,
  chartData,
  dataKey,
  color,
  percentage,
}: ChartProps) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h2>{number}</h2>
        <Link to="/" style={{ color: color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          {" "}
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div
            className="percentage"
            style={{ color: percentage < 0 ? "orange" : "limegreen" }}
          >
            {percentage}%
          </div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
