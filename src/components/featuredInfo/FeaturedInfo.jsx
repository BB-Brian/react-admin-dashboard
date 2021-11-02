import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const randInt = (min, max) => {
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  return rand
};
const featuredOptions = [
  {
    title: "Revenue",
    amount: randInt(90000, 110000).toLocaleString()
  },
  {
    title: "Sales",
    amount: randInt(70000, 80000).toLocaleString()
  },
  {
    title: "Cost",
    amount: randInt(20000, 40000).toLocaleString()
  },
];
export default function FeaturedInfo() {
  return (
    <div className="featured">
      {featuredOptions.map((option, index) => {
        return (
          <div key={index} className="featured-item">
            <span className="featured-title">{option.title}</span>
            <div className="featured-money-container">
              <span className="featured-money">${option.amount}</span>
              {(randInt(1, 10) - 5) > 0 ?
                <span className="featured-money-rate">
                  +{randInt(1,30)} <ArrowUpward className="featured-icon negative" />
                </span>
                :
                <span className="featured-money-rate">
                  -{randInt(1,30)} <ArrowDownward className="featured-icon positive" />
                </span>
              }
            </div>
            <span className="featured-sub">Compared to last month</span>
          </div>
        )
      })}
    </div>
  )
}