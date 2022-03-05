import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import "./home.css";
import { userData, newMembersData } from "../../dummyData.js";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="home-widgets">
        <WidgetSmall data={newMembersData}/>
        <WidgetLarge data={newMembersData} />
      </div>
    </div>
  )
}
