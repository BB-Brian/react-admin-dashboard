import { WidgetLargeSC } from "./WidgetLargeSC";
import { randInt } from "../../utils/randomGenerator";

export default function WidgetLarge({ data }) {

  const userTransactionData = data
  const Button = ({ type }) => {
    return <button className={"widget-large-button " + type}>{type}</button>
  }

  const buttonOptions = ["Approved", "Pending", "Declined"];

  return (
    <WidgetLargeSC>
      <h3 className="widget-large-title">Latest Transactions</h3>
      <table className="widget-large-table">
        <tbody>
          <tr className="widget-large-tr">
            <th className="widget-large-th">Customer</th>
            <th className="widget-large-th">Date</th>
            <th className="widget-large-th">Amount</th>
            <th className="widget-large-th">Status</th>
          </tr>
          {userTransactionData.map((userTransaction, index) => (
            <tr className="widget-large-tr" key={index}>
              <td className="widget-large-user">
                <img
                  src={userTransaction.image}
                  alt="user"
                  className="widget-large-image"
                />
                {userTransaction.name}
              </td>
              <td className="widget-large-date">{userTransaction.date}</td>
              <td className="widget-large-amount">
                {Number(userTransaction.amount).toLocaleString(
                  "us-US", 
                  { style: "currency", currency: "USD" }
                )}
              </td>
              <td className="widget-large-status">
                <Button type={buttonOptions[randInt(0, 2)]}></Button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </WidgetLargeSC>
  )
};
