import "./menu.css";
import { Link } from "react-router-dom";
import { menu } from "../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((menuItem) => (
        <div className="item">
          <span className="title">{menuItem.title}</span>
          {menuItem.listItems.map((submenuItem) => (
            <Link to={submenuItem.url} className="listItem">
              <img src={submenuItem.icon} alt="" />
              <span className="listItemTitle">{submenuItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
