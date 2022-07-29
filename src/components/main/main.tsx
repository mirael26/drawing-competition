import * as React from "react";

import ProjectDescription from "../project-description/project-description";
import Features from "../features/features";
import Instruction from "../instruction/instruction";

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

    </div>
  )
};

export default Main;