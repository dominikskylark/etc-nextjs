import styles from "../styles/Modal.module.css";
import React from "react";
import { AppContext } from "../pages/_app";
// import AnimateHeight from "react-animate-height";
//Modals
// import Profile from "./modals/Profile";
// import ProfileUpdate from "./modals/ProfileUpdate";
import Networking from "./modals/Networking";
import Chat from "./modals/Chat";
import Agenda from "./modals/Agenda";
// import Help from "./modals/Help";
// import Webinar from "./modals/Webinar";
//Loading
// import Loading from "./Loading";
export default function Modal() {
  //   React.useEffect(() => {
  //     actions.theme.modalLoading;
  //   }, []);
  function renderSwitch(param) {
    switch (param) {
      case "networking":
        return <Networking />;
      case "help":
        return <Chat />;
      case "agenda":
        return <Agenda />;
      default:
        return "lobbay";
    }
  }
  const where = React.useContext(AppContext);

  return (
    <div className={styles["modal-wrapper"]}>
      <div
        className={"container mt-4 " + styles["modal-container"]}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "2rem",
        }}
      >
        <div className="row">{renderSwitch(where.states.whereUser)}</div>
      </div>
    </div>
  );
}
