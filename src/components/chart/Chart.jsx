import { ChartSC } from "./chartSC"; 
import { 
  LineChart, 
  Line, 
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { DARK_MODE_CHART_FONT_LINE_COLOR } from "../../shared/sharedStyles";

export default function chart({ title, data, dataKey, grid}) {

  return (
    <ChartSC>
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="99%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke={DARK_MODE_CHART_FONT_LINE_COLOR} />
          <Line type="monotone" dataKey={dataKey} stroke="#837eec" />
          <Tooltip />
          {grid && 
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          }
        </LineChart>
      </ResponsiveContainer>
    </ChartSC>
  )
}
