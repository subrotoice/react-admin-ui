import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { pieChartBox } from "../../data";
import "./PieChartBox.css";

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h2>Leads by Source</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "#fff", borderRadius: "5px" }}
            />
            <Pie
              data={pieChartBox}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {pieChartBox.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {pieChartBox.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div
                className="optionDot"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
