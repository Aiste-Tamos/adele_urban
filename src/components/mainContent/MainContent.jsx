import React from "react";
import Feed from "react-instagram-authless-feed";

import "./mainContent.scss";

export const MainContent = () => {
  const mainClassName = "main-content";
  const descriptionClass = `${mainClassName}__description`;

  return (
    <div className={mainClassName}>
      <div className={descriptionClass}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
        praesentium suscipit? Vero libero ad voluptate deleniti amet, saepe
        quibusdam fuga voluptatum nihil unde nemo tempora ullam quis reiciendis
        ab omnis minus animi beatae repudiandae obcaecati aliquam dolor quia
        tempore sit. Adipisci repellat ipsa possimus molestiae aspernatur ullam
        necessitatibus ea consequatur illo id deserunt laudantium debitis earum
        voluptatem ipsum, cum vel? Aliquid deleniti molestias numquam,
        architecto dolorum illo corrupti similique? Unde esse dolore facere,
        beatae laborum saepe vel iste temporibus excepturi modi eos aspernatur
        corporis natus sunt, deleniti earum optio nulla cum doloremque
        exercitationem voluptate reiciendis aliquam. Nulla, praesentium tenetur?
      </div>
      <Feed userName="adele.urban" className="Feed" classNameLoading="Loading"></Feed>
    </div>
  );
};
