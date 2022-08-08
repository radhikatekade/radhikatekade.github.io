/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  // animated: true // Set to false to use static SVG
  animated: true
};

const greeting = {
  username: "Radhika Tekade",
  title: "Hi all, I'm Radhika",
  subTitle: emoji(
    "I am a Robotics Master's student at Oregon State University graduating in April 2023. I work at the intersection of Mechanical Hardware with Robotics in the aspect of design, analysis, and controls."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/radhikatekade",
  linkedin: "https://www.linkedin.com/in/radhika-tekade/",
  gmail: "tekader@oregonstate.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/radhika.tekade.37",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "I believe in having a positive impact in the direction of new technologies.",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
    },
    {
      skillName: "docker",
    },
    {
      skillName: "html",
    },
    {
      skillName: "css",
    },
    {
      skillName: "matlab",
    },
    {
      skillName: "JavaScript",
    },
    {
      skillName: "reactjs",
    },
    {
      skillName: "nodejs",
    },
    {
      skillName: "npm",
    },
    {
      skillName: "mysql",
    },
    {
      skillName: "aws",
    },
    {
      skillName: "firebase",
    },
    {
      skillName: "anysys",
    },
    {
      skillName: "solidworks",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Oregon State University, OR, USA",
      logo: require("./assets/images/osulogo.png"),
      subHeader: "Master of Science in Robotics, Mechatronics, and Automation",
      duration: "September 2021 - April 2023",
      desc: "Worked as a",
      descBullets: [
        "Graduate Teaching Assistant: System Dynamics and Control, Instrumentation and Measurement Systems",
        "Graduate Student Researcher: Working in the domain of rehabilitation robotics in the Robotics and Human Control Systems (RHCS) Lab to achieve force amplification in human muscle using a passive implant mechanism"
      ]
    },
    {
      schoolName: "Visvesvaraya National Institute of Technology (VNIT), Nagpur, India",
      logo: require("./assets/images/vnitlogo.png"),
      subHeader: "Bachelor of Technology (BTech) in Mechanical Engineering",
      duration: "July 2016 - July 2020",
      desc: "Worked as a",
      descBullets: [
        "Student Mentor: Helping freshmen to seek opportunities and overcome challenges",
        "Co-chairman: at IvLabs, Robotics Club of VNIT",
        "IEEE co-ordinator: Organising workshops under IEEE",
        "Event Organizer: at Axis (Technical Festival of VNIT) and Aarohi (Cultural Festival of VNIT)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cost Control and Risk Management Engineer",
      company: "Technip Energies, Mumbai, India",
      companylogo: require("./assets/images/techniplogo.webp"),
      date: "November 2020 – September 2021",
      desc: "Worked as a Graduate Engineer Trainee",
      descBullets: [
        "Analyzed cost reports, detect issues, and effectively communicate the project’s cost performance, concerns, and recovery plans",
        "Preparation of PMR (Progress Monthly Report) of the project in co-ordination with all departments and provide required feedback to top management w.r.t to project"
      ]
    },
    {
      role: "Mechatronics Research Intern",
      company: "KTH Royal Institute of Technology, Stockholm, Sweden",
      companylogo: require("./assets/images/kthlogo.png"),
      date: "May 2019 – August 2019",
      desc: "Worked on",
      descBullets: [
        "Improvement in Test Automation strategies for the platform built for the verification of automated driving solutions",
        "Consisted of MATLAB codes, Simulink models, and Autoware tools integrated with Prescan software to modify features such as sensors, ground truth, scenario generation, and vehicle dynamics",
        "Supported by the launch files in Python and Shell scripts on Linux OS",
        "Resulting program allowed any number of simulations to run, implementing different vehicle scenarios in succession without any intermediate manual changes"
      ]
    },
    {
      role: "Industrial Trainee",
      company: "Maruti Suzuki (I) Ltd., Amravati, India",
      companylogo: require("./assets/images/mslogo.jpg"),
      date: "December 2018 – January 2019",
      desc: "Worked on",
      descBullets: [
        "Comprehensive technical training about regular automotive servicing and body shop repairs and cross-training exercises at Production Management Division",
        "Assimilated technical knowledge of engines and engine performances, transmissions, brakes, suspensions, and steering systems along with electrical connections of automobiles along with the understanding of business process flow of the organization",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Multi Modal Analysis of songs for emotion detection",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      videoLink:"",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact:"),
  subtitle:
    "",
  number: "",
  email_address: "tekader@oregonstate.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

