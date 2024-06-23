
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";
import { NavMenuItem } from "./MenuItems";

function Navbar() {
  const [menuState, setMenuState] = useState({ clicked: false });

  const navigate = useNavigate();

  const handleClick = () => {
    setMenuState({ clicked: !menuState.clicked });
  };

  const signupHandler = () => {
    navigate("/signup");
  };

  return (
    <nav className={classes.NavbarItems}>
      <h1 className={classes["narbar-logo"]}>Delhi for you</h1>
      <div className={classes["menu-icons"]} onClick={handleClick}>
        <i
          className={
            menuState.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"
          }
        ></i>
      </div>
      {/* classes["nav-menu"] */}
      <ul
        className={
          menuState.clicked
            ? `${classes["nav-menu"]} ${classes.active}`
            : `${classes["nav-menu"]}`
        }
      >
        {NavMenuItem.map((menu, index) => {
          return (
            <li key={index}>
              <Link className={classes[`${menu.cName}`]} to={menu.url}>
                <i className={menu.icon}></i>
                {menu.title}
              </Link>
            </li>
          );
        })}
        <button onClick={signupHandler}>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
