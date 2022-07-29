import * as React from "react";

import ProjectDescription from "../project-description/project-description";

const Main = (): JSX.Element => {
  return (
    <div className="main">
      <section className="main__project-description">
        <ProjectDescription />
      </section>
    </div>
  )
};

export default Main;