import * as React from "react";

import RepostDiscount from "../repost-discount/repost-discount";

const Registration = (): JSX.Element => {
  return (
    <div className="registration">
      <div className="registration__repost-discount">
        <RepostDiscount />
      </div>

      <div className="registration__registration"></div>
    </div>
  )
};

export default Registration;