import { config } from "../config/index";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import React from "react";
import { AppContext } from "./_app";

export default function Lobby(props) {
  const where = React.useContext(AppContext);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {where.states.whereUser ? <Modal /> : null}
      <div
        style={{
          position: "fixed",
          zIndex: "999",
          top: "20px",
          right: "10px",
          height: "calc(100vh - 40px)",
          width: "90px",
          padding: "0",
          transition: "all 0.4s ease-in",
          transitionDelay: "2s",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <Navbar options={props.options} />
      </div>
      {/* <div
        className="container-fluid"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "800",
          minHeight: "80vh",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      ></div> */}
      <div>
        <iframe
          width="100%"
          height="100vh"
          style={{
            width: "100%",
            height: "100vh",
            border: "none",
            maxWidth: "100%",
            position: "fixed",
            zIndex: 0,
            position: "fixed",
            top: 0,
            left: 0,
          }}
          id="kuula-frame"
          frameBorder="0"
          allowFullScreen
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          scrolling="no"
          src={
            "https://kuula.co/share/collection/" +
            props.kuula +
            "?fs=0&vr=0&thumbs=-1&info=0&logo=-1"
          }
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch(config.url + "wp-json/wp/v2/pages/153");
  let options = await fetch(config.url + "wp-json/acf/v3/options/options");
  if (res.ok && options.ok) {
    let optionsJson = await options.json();
    let json = await res.json();
    return {
      props: {
        kuula: json.acf.kuula_code,
        options: optionsJson.acf,
      },
    };
  }
}
