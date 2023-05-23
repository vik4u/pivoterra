import React from "react";
import Link from "next/link";
import ProjectsCard from "@/components/projectscard";
export default function projects() {
  return (
    <div>
      <div className="projectpageparent">
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
        <div className="justformarginparent">
          <div className="stationpparent">
            <p>Station Projects</p>
          </div>

          <div className="cardsparentprojectsgrid">
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
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
    </div>
  );
}
