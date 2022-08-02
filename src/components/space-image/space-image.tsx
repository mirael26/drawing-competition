import * as React from "react";
import { useState } from "react";

const SpaceImage = (): JSX.Element => {
  const [pencilAnimate, setPencilAnimate] = useState(null);

  const onGirlClick = () => {
    if (pencilAnimate === 3) {
      setPencilAnimate(1);
      return;
    }
    setPencilAnimate(pencilAnimate + 1);
  };

  return (
    <div className="space-image">
      <div className="space-image__paper-planes"></div>
      <div className="space-image__girl" onClick={onGirlClick}>
        <div className={`space-image__pencil${pencilAnimate ? ` animated-${pencilAnimate}` : ''}`}></div>
      </div>

      <div className="space-image__space">
        <div className="space-image__atom"></div>
        <div className="space-image__moon"></div>

        <div className="space-image__alarm-wrapper">
          <div className="space-image__alarm"></div>
        </div>

        <div className="space-image__rocket"></div>
        <div className="space-image__striped-planet"></div>
        <div className="space-image__aerostat"></div>
        <div className="space-image__earth"></div>
        <div className="space-image__bulb"></div>
        <div className="space-image__plus"></div>
        <div className="space-image__division"></div>
        <div className="space-image__elephant"></div>
        <div className="space-image__palette"></div>
        <div className="space-image__plane"></div>
        <div className="space-image__stars"></div>
      </div>
    </div>
  )
};

export default SpaceImage;