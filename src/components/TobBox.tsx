import { topDealUsers } from "../data";
import "./topbox.css";

const TobBox = () => {
  return (
    <div className="topBox">
      <h2>Top Deals</h2>
      {topDealUsers.map((user) => (
        <div className="singleUser" key={user.id}>
          <div className="userDetails">
            <div className="userImg">
              <img src={user.img} alt={user.username} />
            </div>
            <div className="userText">
              <span className="userName">{user.username}</span>
              <span className="userEmail">{user.email}</span>
            </div>
          </div>
          <div className="amount">${user.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TobBox;
