import Link from "next/link";
import React from "react";
import Partnercard from "@/components/partnercard";
export default function partners() {
  return (
    <div className="partnerspageparent">
      <nav className="navBar">
        <div>
          <img src="/ic_nav_open.svg" />
        </div>
        <div className="logodiv">
          <img className="logoimg" src="/logo.svg" />
          <p className="pivoterratext">PivoTerra</p>
        </div>

        <div className="fouroptions">
          <Link className="aboutbutton" href="/">
            ABOUT
          </Link>
          <Link className="unitsbutton" href="/units">
            UNITS
          </Link>
          <Link className="projectsbutton" href="/projects">
            PROJECTS
          </Link>
          <Link className="partnersbutton" href="/partners">
            PARTNERS
          </Link>
        </div>
      </nav>
      <div className="justformarginparent">
        <div className="stationparent">
          <p className="stationcrew">Station Partners</p>
        </div>
        <div className="cardspp">
          <Partnercard />
          <Partnercard />
          <Partnercard />
          <Partnercard />
          <Partnercard />
          <Partnercard />
          <Partnercard />
          <Partnercard />
        </div>
      </div>
      <section className="footer">
        <div className="fparent">
          <p className="signature">© 2023 PivoTerra Technology Co., Ltd.</p>
          <p className="email">Station Contact: service@pivoterra.co</p>
          <div className="iconsparent">
            <img className="lineimg" src="/line.b3e21d51.svg" />
            <img className="fbimg" src="/fbimg.svg" />
          </div>
        </div>
      </section>
    </div>
  );
}
