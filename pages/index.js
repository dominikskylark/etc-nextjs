import Head from "next/head";
import Router from "next/router";
import React from "react";
import { config } from "../config/index";
import { AppContext } from "./_app";

export default function Home(props) {
  const context = React.useContext(AppContext);
  async function handleCheckIn() {
    Router.push("/lobby");
  }
  const [email, setEmail] = React.useState("");
  if (context.states.eventOptions) {
    return (
      <div>
        <Head>
          <title>{props.title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className="container-fluid p-0 d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: props.backgroundImage
              ? `url(${props.backgroundImage})`
              : "black",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div
            className="row p-3"
            style={{ backgroundColor: "white", borderRadius: "25px" }}
          >
            <img className="img-fluid" src={props.logo} />
            <form onSubmit={() => handleCheckIn()}>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn">
                Check in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export async function getServerSideProps() {
  console.log(config.url + "wp-json/wp/v2/pages/560");
  let res = await fetch(config.url + "wp-json/wp/v2/pages/560");
  let details = await fetch(config.url + "wp-json/acf/v3/options/options");
  if (res.ok && details.ok) {
    let json = await res.json();
    let detailsJson = await details.json();
    return {
      props: {
        backgroundImage: json.acf.background_image,
        logo: detailsJson.acf.new_secondary_logo,
        title: detailsJson.acf.site_name,
      }, // will be passed to the page component as props
    };
  }
}
