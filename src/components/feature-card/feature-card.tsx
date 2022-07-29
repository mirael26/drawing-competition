import * as React from "react";

interface FeatureCardProps {
  feature: {image: string, text: string},
};

const FeatureCard = ({feature}: FeatureCardProps): JSX.Element => {
  return (
    <div className="feature-card"
      style={{
        backgroundImage: `url(${require(`./../../img/${feature.image}`)}`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '35px 20px'
      }}>
      
      <p className="feature-card__text">{feature.text}</p>
    </div>
  )
};

export default FeatureCard;