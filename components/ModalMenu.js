import React from "react";
import { AppContext } from "../pages/_app";

const ModalMenu = () => {
  const { states, actions } = React.useContext(AppContext);
  function switchProvider() {
    switch (states.whereUser) {
      case "networking":
      case "profile":
        return (
          <>
            <li className="nav-item">
              <a
                className={
                  states.whereUser === "profile"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => actions.whereIsUser("profile")}
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  states.whereUser === "networking"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => actions.whereIsUser("networking")}
              >
                Connections
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Chat
              </a>
            </li>
          </>
        );
      case "help" || "help-videos":
        return (
          <>
            <li className="nav-item">
              <a
                className={
                  states.whereUser === "help" ? "nav-link active" : "nav-link"
                }
                onClick={() => actions.whereIsUser("help")}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  states.whereUser === "help-videos"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => actions.whereIsUser("help-videos")}
              >
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  states.whereUser === "help-chat"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => actions.whereIsUser("help-chat")}
              >
                Help Chat
              </a>
            </li>
          </>
        );
      default:
        return null;
    }
  }
  return (
    <div className="row">
      <ul className="nav nav-pills nav-fill">{switchProvider()}</ul>
    </div>
  );
};

export default ModalMenu;
