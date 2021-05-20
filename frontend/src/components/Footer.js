import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-10">
            <h5 className="footer_greeting">Got a Minute?</h5>
            <p className="footer_greeting_text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              autem, facilis consequatur officia corporis a labore facere
              voluptatem, natus repudiandae possimus. Excepturi ea adipisci ut
              et culpa neque vitae vel?
            </p>
          </div>
           <div className="col-xs-12 col-md-2">
           <a className="icon_mods" href="http://scanfcode.com/contribute-at-scanfcode/">
                <i className="fab fa-staylinked"></i>
              </a>
           </div>
        </div>
        <hr className="article_bottom" />
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12"></div>
            <p className="copyright_text">
            Copyright &copy; 2021 All Rights Reserved by <a href="https://github.com/vintagejojo">Me</a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
