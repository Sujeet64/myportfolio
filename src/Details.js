// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile1.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import flutter from "./assets/techstack/flutter.png";
import salesforce from "./assets/techstack/salesforce.png";
import jira from "./assets/techstack/jira.png";
import EC2 from "./assets/techstack/ec2.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";

import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images

import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Sujeet",
  tagline: "I learn to build!",
  img: profile,
  about: `Hey! I’m a Computer Science grad who loves tech and the business side of things. I’m still getting my hands dirty with coding basics (JS, Flutter, etc.), but here’s the thing: I learn fast and get genuinely pumped about how tech can solve real-world problems or help businesses grow.

Why work with me?
✨ Curious & Adaptable: Throw me a new tool or problem—I’ll figure it out.
✨ Business Obsessed: I care about why tech matters, not just how it works. Think apps people love, workflows that save time, or data that tells a story.
✨ Team Player: I vibe best with others—let’s turn ideas into something cool!

When I’m not glued to a screen, I’m probably:
- Binge-watching tech YouTubers 📺
- Scribbling business ideas 📝


Let’s chat about tech, startups, or your favorite productivity hack!`.split('\n').map((text, index) => (
    <p key={index} style={{ marginBottom: "1rem" }}>
      {text}
    </p>
  )),
};
// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/sujeet-senthilkumar-162a5b231/",
  github: "https://github.com/Sujeet64",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Haven't worked yet",
    Company: "Finding opportunities for now!",
    Location: "",
    Type: "Full Time",
    Duration: "",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Salesforce Development(Learning)",
    Company: "Trailhead,YouTube, Google",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2025 - Present",
  },
  {
    Position: "Frontend Development(Basic)",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2024 - Present",
  },
  {
    Position: "Bachelors in Computer Science ",
    Company: `Kongu Engineering College`,
    Location: "Perundurai",
    Type: "Full Time",
    Duration: "Aug 2022 - Mar 2025",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  flutter: flutter,
  salesforce: salesforce,
  jira: jira,
  EC2: EC2,
  vscode: vscode,
  postman: postman,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  
  {
    title: "NGL-app",
    image: projectImage2,
    description: `This project is a clone of ngl application. It's frontend codebase has been hosted on Github pages and backend codebase on Render`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://sujeet64.github.io/ngl-app/",
    githubLink: "https://github.com/Sujeet64/ngl-app",
  },
  {
    title: "Motorcycle Company Page",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Sujeet64/MINIPROJECT",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sujeetsenthilkumar.com",
  phone: "+91 9600606228",
};
