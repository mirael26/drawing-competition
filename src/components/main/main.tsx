import * as React from "react";

import ProjectDescription from "../project-description/project-description";
import Features from "../features/features";
import Instruction from "../instruction/instruction";
import Certificate from "../certificate/certificate";
import Registration from "../registration/registration";
import Faq from "../faq/faq";
import Subscribe from "../subscribe/subscribe";

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

      <section className="main__registration">
        <Registration />
      </section>

      <section className="main__faq">
        <Faq />
      </section>

      <section className="main__subscribe">
        <Subscribe />
      </section>

    </div>
  )
};

export default Main;