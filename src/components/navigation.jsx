import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            MindGuard
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                選ぶ理由
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                私たちについて
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                提供価値
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                お客様の声
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
