import "./FeaturedInfoSC.js"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { FeaturedInfoSC } from "./FeaturedInfoSC.js";

const randInt = (min, max) => {
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  return rand
};

const sales = randInt(80000, 110000);
const cost = sales * .35;
const revenue = sales - cost;

const featuredOptions = [
  {
    title: "Revenue",
    amount: revenue.toLocaleString("en-IN", {style: "currency", currency: "USD"})
  },
  {
    title: "Sales",
    amount: sales.toLocaleString("en-IN", {style: "currency", currency: "USD"})
  },
  {
    title: "Cost",
    amount: cost.toLocaleString("en-IN", {style: "currency", currency: "USD"})
  },
];
export default function FeaturedInfo() {
  return (
    <FeaturedInfoSC>
      {featuredOptions.map((option, index) => {
        return (
          <div key={index} className="featured-item">
            <span className="featured-title">{option.title}</span>
            <div className="featured-money-container">
              <span className="featured-money">{option.amount}</span>
              {(randInt(1, 10) - 5) > 0 ?
                <span className="featured-money-rate">
                  +{randInt(1,30)} <ArrowUpward className="featured-icon positive" />
                </span>
                :
                <span className="featured-money-rate">
                  -{randInt(1,30)} <ArrowDownward className="featured-icon negative" />
                </span>
              }
            </div>
            <span className="featured-sub">Compared to last month</span>
          </div>
        )
      })}
    </FeaturedInfoSC>
  )
}