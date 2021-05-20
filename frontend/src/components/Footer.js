import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h5 className="footer_greeting">Got a Minute?</h5>
            <p className="footer_greeting_text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              autem, facilis consequatur officia corporis a labore facere
              voluptatem, natus repudiandae possimus. Excepturi ea adipisci ut
              et culpa neque vitae vel?
            </p>
          </div>
          <div className="col-xs-6 col-md-3"></div>
          <div className="col-xs-6 col-md-3 flex-column">
              <a className="icon_mods" href="http://scanfcode.com/contribute-at-scanfcode/">
                <i class="fab fa-facebook"></i>
              </a>
              <a className="icon_mods" href="http://scanfcode.com/contribute-at-scanfcode/">
                <i class="fab fa-facebook"></i>
              </a>
              <a className="icon_mods" href="http://scanfcode.com/contribute-at-scanfcode/">
                <i class="fab fa-facebook"></i>
              </a>
              
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
