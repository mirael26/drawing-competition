import * as React from "react";

const Logo = (): JSX.Element => {
  return (
    <div className="logo">
      <img className="logo__image" src={require('../../../img/logo-slonum.png')} alt="Логотип Слонум" />
    </div>
  )
};

export default Logo;