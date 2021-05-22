import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Header.css";

import logo from "../../images/Logo.png";

const Header = () => {
  const { auth } = useSelector((state) => state);

  return (
    <div>
      <header className="hea_der">
        <div className="container_cust">
          <div className="inner_header">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="navi_gation">
              {/* {
                auth.token && auth.role ? 
                <Link className="gen_btn btn_white" to="/admin">
                dashboard
              </Link>
              :
              <Link className="gen_btn btn_white" to="/login">
                dashboard
              </Link>
              } */}
              <Link className="gen_btn btn_white" to={auth.token && auth.role ? "/admin/upcommingpool" : "/admin/login"}>
                dashboard
              </Link>
              <Link className="gen_btn btn_orange" to="/metamask">
                connect wallet
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
