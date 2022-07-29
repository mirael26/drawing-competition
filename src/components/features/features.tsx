import * as React from "react";
import { FeaturesContent } from "../../consts";


import FeatureCard from "../feature-card/feature-card";

const Features = (): JSX.Element => {
  return (
    <div className="features">
      <h2 className="features__title">Для чего <span className="features__title features__title--accent">нужно</span> участвовать</h2>

      <ul className="features__list">

        {FeaturesContent.map((feature, i) => {
          return <li key={i} className="features__item">
            <FeatureCard feature={feature} />
          </li>
        })}        

      </ul>
    </div>
  )
};

export default Features;