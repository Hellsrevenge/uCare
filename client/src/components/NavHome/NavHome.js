import React from "react";
import FormLogin from "../FormLogin/FormLogin";


function NavHome() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          UCare
        </a>
        <FormLogin />
      </nav>
    );
  };

export default NavHome;