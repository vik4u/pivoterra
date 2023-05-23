import React from "react";

export default function NFTcard() {
  return (
    <div className="nftcardone">
      <div className="parentcard">
        <div className="firstimg">
          <img className="kenjiimg" src="/img_tech_kenji.png" />
        </div>
        <div className="rightmaterial">
          <div className="founderdiv">
            <p>Founder</p>
            <img className="twitterlogo" src="/twitter.71c6706a.svg" />
          </div>
          <p className="kenjitext">KENJI</p>
          <p className="cardtext">
            Investment Analyst, Member of MatrixDAO, Dedicated to Build HyFi and
            Innovation
          </p>
        </div>
      </div>
    </div>
  );
}
