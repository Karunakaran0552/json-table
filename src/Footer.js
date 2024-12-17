// import React from "react"

// const Footer = () => {
//     const year=new Date();
//   return (
//     <footer>
//         Copy Rights &copy; {year.getFullYear()}
//     </footer>
//   )
// }

// export default Footer












import React from "react";
import data from "./db.json";

const Footer = () => {
  const users = data.users;
  const headers = Object.keys(users[0]);

  const createHeader = () =>
    React.createElement(
      "thead",
      {},
      React.createElement(
        "tr",
        {},
        headers.map((header) =>
          React.createElement("th", {}, header)
        )
      )
    );

  const createBody = () =>
    React.createElement(
      "tbody",
      {},
      users.map((user) =>
        React.createElement(
          "tr",
          {},
          headers.map((header) =>
            React.createElement("td", {}, user[header])
          )
        )
      )
    );

  const createTable = () =>
    React.createElement(
      "table",
      { border: "1" },
      createHeader(),
      createBody()
    );

  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Dynamic Table"),
    createTable(),
  ]);
};

export default Footer;