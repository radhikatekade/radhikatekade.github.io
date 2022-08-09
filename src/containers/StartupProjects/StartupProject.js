import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";


const GetDescBullets = ({descBullets, isDark}) => {
  return descBullets
    ? descBullets.map((item, i) => (
        <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
          {item}
        </li>
      ))
    : null;
};

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <>
      <div className="image-main">
        <div className="image-div">
          <img
            alt="man sitting on table"
            src={require("../../assets/images/serviceAnimation.gif")}
          ></img>
        </div>
        <div className="image-div">
          <img
            alt="man sitting on table"
            src={require("../../assets/images/wproudCoder.svg")}
          ></img>
        </div>
      </div>
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.videoLink ? (
                    <div className="project-video">
                      <iframe
                        title={project.projectName}
                        className="card-video"
                        src={project.videoLink + "?autoplay=1&loop=1&controls=0&mute=1"}
                        frameborder="0"
                        loop="1"
                        allow="autoplay"
                      ></iframe>
                    </div>
                  ) : null}
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      />
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <h5
                      className={
                        isDark
                          ? "experience-text-date dark-mode-text"
                          : "experience-text-date"
                      }
                    >
                      {project.date}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    <ul>
                      <GetDescBullets
                        descBullets={project.descBullets}
                        isDark={isDark}
                      />
                    </ul>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
