import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
