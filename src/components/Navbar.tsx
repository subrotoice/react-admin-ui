import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        React Admin
      </div>
      <div className="rightIcons">
        <img src="search.svg" alt="" className="navbar__icon" />
        <img src="app.svg" alt="" className="navbar__icon" />
        <img src="expand.svg" alt="" className="navbar__icon" />
        <img src="search.svg" alt="" className="navbar__icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="profileInfo">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Subroto</span>
        </div>
        <img src="settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
