import NFTcard from "@/components/nftcards";
import Link from "next/link";
import React from "react";

export default function units() {
  return (
    <div className="unitpageparent">
      <nav className="navBar">
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
      <section className="secpgfirstdiv">
        <div className="justformarginparent">
          <div className="stationparent">
            <p className="stationcrew">Station Crew</p>
          </div>
          <section className="firstsixparent">
            <div className="cardsparent">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <NFTcard key={item} />
              ))}
            </div>
          </section>

          <div className="advisorparent">
            <p className="stationcrew">Advisors</p>
          </div>
          <section className=" lastthreeparent">
            <div className="cardsparentbelow">
              {[1, 2, 3].map((item) => (
                <NFTcard key={item} />
              ))}
            </div>
          </section>
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
      </section>
    </div>
  );
}
