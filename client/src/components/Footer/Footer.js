import React from "react";
import "./Footer.css";

const footerStyle = {
    height: "200px",
    width: "1652px"
  }


function Footer() {
  return (

 <div>
    <div className="card" style={footerStyle}>
        <div className="card-body">
            <a href="#" className="btn btn-primary">About UCare</a>
            <a href="#" className="btn btn-primary">Customer Support</a>
            <a href="#" className="btn btn-primary">Contact Us</a>
        </div>
        <div class="card-footer text-muted">
            UCare
        </div>
    </div>
</div> 



  );
}

export default Footer;



