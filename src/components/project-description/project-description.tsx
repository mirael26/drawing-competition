import * as React from "react";

const ProjectDescription = (): JSX.Element => {
  return (
    <div className="project-description">
      <p className="project-description__text">
        Компания <span className="project-description__text project-description__text--strong">СлонУм</span>
         – проводит конкурс для детей в котором могут участвовать ребята <span className="project-description__text project-description__text--accent">всех возрастов!</span> Номинации в которых можно победить, есть возможность проявить себя во всех направлениях и даже <span className="project-description__text project-description__text--accent">без художественных способностей.</span>
      </p>
    </div>
  )
};

export default ProjectDescription;