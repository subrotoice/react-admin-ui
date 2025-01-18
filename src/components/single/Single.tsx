import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import "./single.css";

interface Props {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
}

const Single = ({ id, img, title, info, chart, activities }: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="profile">
          <div className="topInfo">
            {img && <img src={img} alt="" />}
            <h2>{title}</h2>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(info).map((item) => (
              <div className="single__item" key={item[0]}>
                <span className="itemTitle">{item[0]}: </span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {chart && (
          <div className="elementChart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey) => (
                  <Line
                    key={dataKey.name}
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {activities && (
          <ul>
            {activities.map((activitie) => (
              <li key={activitie.text}>
                <div>
                  <h3>{activitie.text}</h3>
                  <time>{activitie.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
