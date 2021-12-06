import useSWR from "swr";
import React from "react";
import { AppContext } from "../pages/_app";

export default function Layout({ children }) {
  const context = React.useContext(AppContext);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://eventadmin.skylark.digital/wp-json/acf/v3/options/options",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const styled = data.acf;

  return (
    <div>
      {children}
      <style jsx global>
        {`
          body {
            font-family: ${styled.body_text_font};
            color: ${styled.body_text_colour.slice(1, -1)};
            font-size: ${styled.body_text_size.slice(1, -1)};
          }
          a {
            color: ${styled.link_colour.slice(1, -1)};
          }
          a:hover {
            color: ${styled.link_hover_colour.slice(1, -1)};
          }
          button {
            background-color: ${styled.primary_button_colour};
            color: ${styled.primary_button_text_colour};
          }
          .button-primary {
            background-color: ${styled.primary_button_colour};
            color: ${styled.primary_button_text_colour};
          }
          .button-primary:hover {
            background-color: ${styled.primary_button_hover_colour};
            color: ${styled.primary_button_text_hover_colour};
          }
          button:hover {
            background-color: ${styled.primary_button_hover_colour};
            color: ${styled.primary_button_text_hover_colour};
          }
          h1,
          h2,
          h3,
          h4,
          h5 {
            font: ${styled.heading_font};
            color: ${styled.heading_colour};
          }
          h1 {
            font-size: ${styled.h1_size.replace(/['"]+/g, "")};
          }
          h2 {
            font-size: ${styled.h2_size.replace(/['"]+/g, "")};
          }
          h3 {
            font-size: ${data.acf.h3_size};
          }
          h4 {
            font-size: ${data.acf.h4_size};
          }
          .card-title {
            font-size: ${data.acf.h2_size.slice(1, -1)};
          }
          .menu-item {
            background-color: black;
          }
        `}
      </style>
    </div>
  );
}
