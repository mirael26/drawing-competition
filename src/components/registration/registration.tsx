import * as React from "react";

import RepostDiscount from "../repost-discount/repost-discount";
import RegistrationForm from "../registration-form/registration-form";

const Registration = (): JSX.Element => {
  return (
    <div className="registration">
      <div className="registration__repost-discount">
        <RepostDiscount />
      </div>

      <div className="registration__registration-form">
        <RegistrationForm />
      </div>
    </div>
  )
};

export default Registration;