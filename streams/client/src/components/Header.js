import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      {" "}
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/">All Streams</Link>
      </div>
    </div>
  );
};

export default Header;
