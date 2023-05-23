import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import React from "react";
import Link from "next/link";

export default function pivoterra() {
  return (
    <div className="mainpg">
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
      <section className="firstsec">
        <div className="firstdivparent">
          <div className="textparent">
            <p className="seconetext">
              Station Consist of Web 3 Talents,
              <br /> Vision to Support Next-Gen
              <br />
              Financial Services. 👨🏼‍🚀👩‍🔧
            </p>
          </div>
          <div className="parentoffour">
            <div className="firstrow">
              <div className="tokenone tokens">
                <img className="firstimg" src="/one.svg" />
                <p className="divtexts">Tokenization</p>
              </div>
              <div className="tokentwo tokens">
                <img className="secondimg" src="/two.svg" />
                <p className="divtexts">Tokenomic</p>
              </div>
            </div>
            <div className="secondrow">
              <div className="tokenthree tokens">
                <img className="thirdimg" src="three.svg" />
                <p className="divtexts">Voxel Art</p>
              </div>
              <div className="tokenfour tokens">
                <img className="fourthimg" src="/four.svg" />
                <p className="divtexts">Integration</p>
              </div>
            </div>
          </div>
        </div>
        <div className="imageparent">
          <img className="bigimg" src="/img_hero.png" />
        </div>
      </section>
      <section className="secsectionparent">
        <div className="wholesec">
          <div className="lefttext">
            <div className="threeitems">
              <h1 className="boldtext">How does it work?</h1>
              <p className="firstpara paragraph">
                We formed PivoTerra by inherent core values and a great mission.
                PivoTerra is focusing on building feasible models with the
                promising ideas and partners, furthermore, accelerating
                traditional finance to adopt crypto technology. Through years of
                market cycles, we believe the novel paradigm of finance, medium
                of data and info are in the phase to next generation. In
                addition, we discover several flaws of existing
                crypto-ecosystem, like the vulnerability of tokenomics, solely
                reliance on intrinsic momentum and lack of regulation, PivoTerra
                is trying to be a friendly station to provide solutions through
                project-collaboration and Web 3.0 technology and business
                support.
              </p>
              <p className="secondpara paragraph">
                To fulfill our mission, we take steps progressively and in a
                prudential way. First, we put the anchor in the direction of
                building collaboration with regulators and partners as solid
                basics for Web 3.0 project development. Target problems,
                organize solutions, and acquire resources is our workflow, then,
                we build!
              </p>
            </div>
            <div className="righttext">
              <p className="rightphead">
                Why name PivoTerra? It’s an idea of being agile, integrative and
                keeping history in mind.
              </p>
              <div className="flexp">
                <div className="lineonly"></div>
                <p className="rightpbody paragraph">
                  PivoTerra consist of Web 3 talents, we have experiences of
                  built up metaverse scenes, design NFT and tokenomic, also
                  working on developing first real estate fractionalized NFT
                  project as the first milestone with partners. Integrate DeFi
                  with NFT and TradFi is under our future plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
