import * as React from "react";

import ProjectDescription from "../project-description/project-description";
import Features from "../features/features";
import Instruction from "../instruction/instruction";
import Certificate from "../certificate/certificate";
import Registration from "../registration/registration";

const Main = (): JSX.Element => {
  return (
    <div className="main">
      <section className="main__project-description">
        <ProjectDescription />
      </section>

      <section className="main__features">
        <Features />
      </section>

      <section className="main__instruction">
        <Instruction />
      </section>

      <section className="main__certificate">
        <Certificate />
      </section>

      <section className="main__certificate">
        <Registration />
      </section>

    </div>
  )
};

export default Main;