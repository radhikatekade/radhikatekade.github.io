import React from "react";
import {ReactComponent as MatlabLogo} from "../../assets/images/matlab.svg";
import {ReactComponent as SolidWorksLogo} from "../../assets/images/solidworksLogo.svg";
import {ReactComponent as AnysysLogo} from "../../assets/images/anysysLogo.svg";
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDocker,
  DiCss3,
  DiNpm,
  DiHtml5,
  DiDjango,
  DiFirebase,
  DiVisualstudio,
  DiMysql,
  DiAws,
  DiDart,
  DiUnitySmall,
  DiAngularSimple,
  DiBootstrap
} from "react-icons/di";
import {
  SiArduino,
  SiCplusplus,
  SiExpress,
  SiFlutter,
  SiMaterialui,
  SiOpencv,
  SiPytorch,
  SiRos,
  SiSequelize,
  SiStorybook,
  SiUbuntu,
  SiWebpack
} from "react-icons/si";

export default function logos({logoName}) {
  switch (logoName) {
    case "html":
      return <DiHtml5 />;
    case "reactjs":
      return <DiReact />;
    case "css":
      return <DiCss3 />;
    case "JavaScript":
      return <DiJavascript />;
    case "nodejs":
      return <DiNodejs />;
    case "c++":
      return <SiCplusplus />;
    case "firebae":
      return <DiReact />;
    case "python":
      return <DiPython />;
    case "mysql":
      return <DiMysql />;
    case "aws":
      return <DiAws />;
    case "dart":
      return <DiDart />;
    case "unity":
      return <DiUnitySmall />;
    case "matlab":
      return <MatlabLogo />;
    case "git":
      return <DiGit />;
    case "docker":
      return <DiDocker />;
    case "npm":
      return <DiNpm />;
    case "vscode":
      return <DiVisualstudio />;
    case "firebase":
      return <DiFirebase />;
    case "django":
      return <DiDjango />;
    case "angularjs":
      return <DiAngularSimple />;
    case "flutter":
      return <SiFlutter />;
    case "express":
      return <SiExpress />;
    case "sequelize":
      return <SiSequelize />;
    case "mui":
      return <SiMaterialui />;
    case "webpack":
      return <SiWebpack />;
    case "mongodb":
      return <DiMongodb />;
    case "bootstrap":
      return <DiBootstrap />;
    case "ros":
      return <SiRos />;
    case "linux":
      return <SiUbuntu />;
    case "storybook":
      return <SiStorybook />;
    case "pytorch":
      return <SiPytorch />;
    case "opencv":
      return <SiOpencv />;
    case "ansys":
      return <AnysysLogo />;
    case "solidworks":
      return <SolidWorksLogo />;
    case "arduino":
      return <SiArduino />;
    case "simulink":
      return (
        <img
          width="50px"
          height="50px"
          alt="simulink"
          src={require("../../assets/images/simulink.png")}
        />
      );
    default:
      break;
  }
}
