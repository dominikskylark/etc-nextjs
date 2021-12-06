import { Coffee, Hexagon, Calendar, HelpCircle, LogOut } from "react-feather";
import { config } from "../config";
import styles from "../styles/Navbar.module.css";
import { AppContext } from "../pages/_app";
import React from "react";
export default function Navbar({ options }) {
  const nav = React.useContext(AppContext);
  const IconSize = 32;

  return (
    <div className={styles["navbar"]}>
      <ul className={"d-flex align-items-center " + styles["navbar-nav"]}>
        <li className={styles["event-logo"] + " " + styles["menu-item"]}>
          <img src={options.new_master_logo} className="img-fluid" />
        </li>
        <li className={styles["menu-item"]}>
          <img
            src={config.url + "wp-content/uploads/2021/11/avatar-2.jpeg"}
            className={styles["user-photo"]}
            alt="This is a small profile image of Digital Ocean’s mascot, a blue smiling shark."
            // onClick={() => actions.theme.setWhereUser("profile")}
          />
        </li>
        <li
          className={"button-primary " + styles["menu-item"]}
          style={
            options.has_lobby
              ? {
                  visibility: "display",
                }
              : { visibility: "hidden" }
          }
          onClick={() => nav.actions.whereIsUser(null)}
        >
          <Coffee size={IconSize} className="navbar-icon" />
          <br />
          <span>Lobby</span>
        </li>
        <li
          className={"button-primary " + styles["menu-item"]}
          style={
            options.has_networking
              ? { visibility: "display" }
              : { visibility: "hidden" }
          }
          onClick={() => nav.actions.whereIsUser("networking")}
        >
          <Hexagon size={IconSize} className="navbar-icon" />
          <br />
          Networking
        </li>
        <li
          className={"button-primary " + styles["menu-item"]}
          style={
            options.has_programme
              ? { visibility: "display" }
              : { visibility: "hidden" }
          }
          onClick={() => nav.actions.whereIsUser("agenda")}
        >
          <Calendar size={IconSize} className="navbar-icon" />
          <br />
          Agenda
        </li>
        <li
          className={"button-primary " + styles["menu-item"]}
          style={
            options.has_help_desk
              ? { visibility: "display" }
              : { visibility: "hidden" }
          }
          onClick={() => nav.actions.whereIsUser("help")}
        >
          <HelpCircle size={IconSize} className="navbar-icon" />
          <br />
          Help Desk
        </li>
        <li className={"button-primary " + styles["menu-item"]}>
          <LogOut size={IconSize} className="navbar-icon" />
          <br />
          Sign out
        </li>
      </ul>
    </div>
  );
}
